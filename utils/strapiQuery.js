const URL = process.env.STRAPIBASEURL;

// The one way this site reads from Strapi: a plain POST to /graphql.
export async function strapiQuery(query, variables) {
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
  return data;
}

// For queries whose result is identical across pages (all-recipes, affiliate
// partners, blog listings): getStaticProps runs once per page, so each build
// worker would otherwise hit Strapi with the same query dozens of times —
// which has OOM-crashed the Heroku dyno mid-build before. Cached per worker
// process; in `next dev` this means a server restart is needed to pick up
// Strapi content changes (an existing quirk of this project's dev workflow).
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
