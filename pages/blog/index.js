import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import { Listing3ColStyles } from '../../components/Listings3Col.styled';
import BlogListingCard from '../../components/Cards/BlogListingCard/BlogListingCard';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{blogPosts(pagination: { limit: 300 }) {
        data {
          attributes {
            urlSlug
            Title
            Date
            TextPreviewSnippet
            ListingCardImage {
              data {
                attributes {
                  url
                  caption
                }
              }
            }
            blog_authors {
                data {
                  attributes {
                    AuthorName
                  }
                }
              }
          }
        }
      }}`,
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
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars - Cocktail Blog Posts and Cocktail Articles</title>
        <meta name="description" content="One Drink Three Bars - How to make craft cocktails at home and how to find the best bars" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="One Drink Three Bars - Cocktail Blog Posts and Cocktail Articles" />
        <meta property="og:description" content="How to make craft cocktails at home" />
      </Head>

      <ContentWrapperConstrainedStyles>
        <main>
          <h1>Cocktail Blog Posts and Articles</h1>
        
        <Listing3ColStyles>
        {blogPosts.map((blogPost, index) => (
              <Link className="listing-card" key={index} href={`/blog/${blogPost.attributes.urlSlug}`}>
                <BlogListingCard  blogPost={blogPost} />
              </Link>
            ))}
        </Listing3ColStyles>
            
          
        </main>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}
