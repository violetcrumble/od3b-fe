const URL = process.env.STRAPIBASEURL;
const TOKEN = process.env.STRAPI_API_TOKEN;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!URL || !TOKEN) {
    console.error(
      `Missing config: STRAPIBASEURL=${URL ? 'set' : 'MISSING'}, STRAPI_API_TOKEN=${TOKEN ? 'set' : 'MISSING'}`,
    );
    return res.status(500).json({ error: 'Rating service is not configured' });
  }

  const { slug, rating, previousRating } = req.body;

  if (!slug || typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug)) {
    return res.status(400).json({ error: 'A valid recipe slug is required' });
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be a whole number from 1 to 5' });
  }
  if (previousRating !== undefined && (!Number.isInteger(previousRating) || previousRating < 1 || previousRating > 5)) {
    return res.status(400).json({ error: 'Previous rating must be a whole number from 1 to 5' });
  }

  try {
    const lookupRes = await fetch(
      `${URL}/api/recipes?filters[recipeUrlSlug][$eq]=${encodeURIComponent(slug)}&fields[0]=ratingCount&fields[1]=ratingTotal`,
      { headers: { Authorization: `Bearer ${TOKEN}` } },
    );
    if (!lookupRes.ok) {
      const detail = await lookupRes.text().catch(() => '');
      console.error(`Strapi lookup failed: ${lookupRes.status} ${lookupRes.statusText} — ${detail}`);
      return res.status(502).json({ error: 'Could not look up recipe' });
    }
    const lookup = await lookupRes.json();
    const recipe = lookup.data && lookup.data[0];
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    const currentCount = recipe.ratingCount || 0;
    const currentTotal = recipe.ratingTotal || 0;

    // A change (previousRating set) swaps the old vote for the new one without
    // adding to the count; falls back to a fresh vote if there's nothing to change.
    const isChange = previousRating !== undefined && currentCount > 0;
    const ratingCount = isChange ? currentCount : currentCount + 1;
    const ratingTotal = Math.max(0, currentTotal + rating - (isChange ? previousRating : 0));

    const updateRes = await fetch(`${URL}/api/recipes/${recipe.documentId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ data: { ratingCount, ratingTotal } }),
    });
    if (!updateRes.ok) {
      const detail = await updateRes.text().catch(() => '');
      console.error(`Strapi update failed: ${updateRes.status} ${updateRes.statusText} — ${detail}`);
      return res.status(502).json({ error: 'Could not save rating' });
    }

    return res.status(200).json({ success: true, ratingCount, ratingTotal });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
