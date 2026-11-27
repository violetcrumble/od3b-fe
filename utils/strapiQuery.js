const URL = process.env.STRAPIBASEURL;
const PREVIEW_DRAFTS = process.env.STRAPI_PREVIEW_DRAFTS === 'true' && process.env.NODE_ENV !== 'production';
const PREVIEW_PLACEHOLDER_PHOTO = {
  url: 'https://res.cloudinary.com/onedrinkthreebars/image/upload/e_grayscale,o_35/l_text:Arial_110_bold:PHOTO%20NEEDED,co_rgb:5b2a86/v1784250292/jack_daniels_blackberry_lynchburg_lemonade_a68ab485db.jpg',
  caption: null,
  alternativeText: 'Placeholder photo (draft preview)',
};
const PREVIEW_PLACEHOLDER_AUTHOR = { AuthorName: 'Author not set (draft preview)' };

function askForDrafts(query) {
  return query.replace(/\b(recipes|blogPosts|glossaryTerms)\(/g, '$1(status: DRAFT, ');
}

function fillDraftGaps(data) {
  data?.recipes?.forEach((recipe) => {
    if ('PhotoMain' in recipe && !recipe.PhotoMain?.length) {
      recipe.PhotoMain = [PREVIEW_PLACEHOLDER_PHOTO];
    }
  });
  data?.blogPosts?.forEach((blogPost) => {
    if ('blog_authors' in blogPost && !blogPost.blog_authors?.length) {
      blogPost.blog_authors = [PREVIEW_PLACEHOLDER_AUTHOR];
    }
  });
  return data;
}

// The one way this site reads from Strapi: a plain POST to /graphql.
export async function strapiQuery(query, variables) {
  if (PREVIEW_DRAFTS) query = askForDrafts(query);
  const res = await fetch(`${URL}/graphql`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(variables ? { query, variables } : { query }),
  });
  if (!res.ok) {
    throw new Error(`Strapi query failed: ${res.status} ${res.statusText}`);
  }
  const { data, errors } = await res.json();
  if (errors?.length) {
    throw new Error(`Strapi query failed: ${errors[0].message}`);
  }
  return PREVIEW_DRAFTS ? fillDraftGaps(data) : data;
}

const cache = new Map();
export function strapiQueryCached(query) {
  if (!cache.has(query)) {
    cache.set(
      query,
      strapiQuery(query).catch((err) => {
        cache.delete(query);
        throw err;
      }),
    );
  }
  return cache.get(query);
}
