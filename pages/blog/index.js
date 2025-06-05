import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import BlogListingCard from '../../components/Cards/BlogListingCard/BlogListingCard';
import { GET_ALL_BLOG_POSTS } from '../../graphql/queries';

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
      blogPosts: data.data.blogPosts.data,
    },
  };
}

export default function BlogListing({ blogPosts }) {

  // Sort blog posts by Date in descending order (latest first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.attributes.Date);
    const dateB = new Date(b.attributes.Date);
    return dateB - dateA; // Descending order
  });

  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Cocktail Blog Posts and Cocktail Articles</title>
        <meta name="description" content="Cocktail Underground - Visit the best bars and find the best cocktails with Cocktail Underground" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Cocktail Underground - Cocktail Blog Posts and Cocktail Articles" />
        <meta property="og:description" content="Cocktail Underground - Visit the best bars and find the best cocktails with Cocktail Underground" />
      </Head>

      <main>
        <h1>Cocktail Blog Posts and Articles</h1>

        {sortedBlogPosts.map((blogPost, index) => (
          <Link className="listing-card" key={index} href={`/blog/${blogPost.attributes.urlSlug}`} rel="canonical">
            <BlogListingCard blogPost={blogPost} />
          </Link>
        ))}
        <div className="listing-card"></div>
      </main>

    </ContentWrapper>
  );
}
