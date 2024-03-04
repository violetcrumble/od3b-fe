//pages/sitemap.xml.js
const RECIPES_URL = 'https://https://one-drink-three-bars-cms-ac9b2b61e4f5.herokuapp.com/api/recipes';
const BLOGPOSTS_URL = 'https://https://one-drink-three-bars-cms-ac9b2b61e4f5.herokuapp.com/api/blogposts';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://onedrinkthreebars.com</loc>
     </url>
     <url>
       <loc>https://onedrinkthreebars.com/cocktail-recipes</loc>
     </url>
     ${recipes
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${RECIPES_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
       <url>
       <loc>https://onedrinkthreebars.com/blog</loc>
     </url>
       ${blogposts
        .map(({ id }) => {
          return `
        <url>
            <loc>${`${BLOGPOSTS_URL}/${id}`}</loc>
        </url>
      `;
        })
        .join('')}
        <url>
       <loc>https://onedrinkthreebars.com/friends</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;