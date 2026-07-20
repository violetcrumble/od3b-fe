import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import ListingCard from '../../components/Cards/ListingCard/ListingCard';
import { GET_ALL_BLOG_POSTS } from '../../graphql/queries';
import SITE_URL from '../../utils/siteUrl';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_ALL_BLOG_POSTS,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: {
      blogPosts: data.data.blogPosts,
    },
  };
}

export default function BlogListing({ blogPosts }) {
  // Sort blog posts by Date in descending order (latest first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateB - dateA; // Descending order
  });

  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Cocktail Blog Posts and Cocktail Articles</title>
        <meta
          name="description"
          content="Cocktail Underground - Visit the best bars and find the best cocktails with Cocktail Underground"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Cocktail Underground - Cocktail Blog Posts and Cocktail Articles" />
        <meta
          property="og:description"
          content="Cocktail Underground - Visit the best bars and find the best cocktails with Cocktail Underground"
        />
      </Head>

      <div className="constrained-content">
        <h1 className="text-brand-purple">Cocktail Blog Posts and Articles</h1>
        <h2 className="sr-only">Articles</h2>
        <div className="listings-3-col">
          {sortedBlogPosts.map((blogPost) => (
            <Link className="listing-card" key={blogPost.urlSlug} href={`/blog/${blogPost.urlSlug}`}>
              <ListingCard
                title={blogPost.Title}
                authorName={blogPost.blog_authors[0].AuthorName}
                date={blogPost.Date}
                imageUrl={blogPost.ListingCardImage?.url}
                imageCaption={blogPost.ListingCardImage?.caption}
                snippet={blogPost.TextPreviewSnippet}
              />
            </Link>
          ))}

          <div className="listing-card"></div>
        </div>
      </div>
    </ContentWrapper>
  );
}
