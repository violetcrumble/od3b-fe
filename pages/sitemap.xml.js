// pages/sitemap.xml.js

const URL = "https://onedrinkthreebars.com";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
       <loc>${URL}/cocktail-recipes</loc>
       <loc>${URL}/cocktail-recipes/naked-and-famous-cocktail</loc>
       <loc>${URL}/cocktail-recipes/paper-plane-cocktail-recipe</loc>
       <loc>${URL}/cocktail-recipes/how-to-make-a-mai-tai</loc>
       <loc>${URL}/cocktail-recipes/root-beer-rye-old-fashioned</loc>
       <loc>${URL}/cocktail-recipes/aperol-spritz-recipe</loc>
       <loc>${URL}/cocktail-recipes/old-fashioned-recipe</loc>
       <loc>${URL}/cocktail-recipes/halloween-blood-bag-margarita</loc>
       <loc>${URL}/cocktail-recipes/negroni-cocktail-recipe</loc>
       <loc>${URL}/cocktail-recipes/nirvana-baby-spencer-elden-drink</loc>
       <loc>${URL}/cocktail-recipes/mint-julep-cocktail-recipe</loc>
       <loc>${URL}/cocktail-recipes/old-pal-cocktail-recipe</loc>
       <loc>${URL}/cocktail-recipes/rumchata-pumpkin-pie-martini</loc>
       <loc>${URL}/cocktail-recipes/spicy-margarita-cocktail-recipe</loc>
       <loc>${URL}/cocktail-recipes/whiskey-sour-recipe</loc>
       <loc>${URL}/cocktail-recipes/buzz-button-cocktail-white-lady</loc>
       <loc>${URL}/cocktail-recipes/bag-in-the-aisle-old-forester</loc>
       <loc>${URL}/cocktail-recipes/espresso-martini-recipe</loc>
       <loc>${URL}/cocktail-recipes/white-russian-cocktail-recipe</loc>
       <loc>${URL}/cocktail-recipes/verbena-buzz-button-cocktail</loc>
       <loc>${URL}/blog</loc>
       <loc>${URL}/blog/best-bars-pigeon-forge-tennessee</loc>
       <loc>${URL}/home-bar-supplies</loc>
       <loc>${URL}/friends</loc>
     </url>
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
