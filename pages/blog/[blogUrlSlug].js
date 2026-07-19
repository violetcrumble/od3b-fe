import Head from 'next/head';
import Link from 'next/link';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_POST, GET_ALL_AFFILIATE_PARTNERS } from '../../graphql/queries';
import ContentWrapper from '../../components/ContentWrapper';
import Markdown from 'react-markdown';
import styles from '../../styles/pages/BlogPost.module.scss';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import ThcAffiliateCTAs from '../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import getBreadcrumbJsonLd from '../../utils/breadcrumbJsonLd';
import SITE_URL from '../../utils/siteUrl';

const URL = process.env.STRAPIBASEURL;

const client = new ApolloClient({
  link: new HttpLink({ uri: `${URL}/graphql` }),
  cache: new InMemoryCache(),
});

export default function BlogPost({ blogPost, affiliates }) {
  const formattedDate = new Date(blogPost.Date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });

  const canonicalUrl = `${SITE_URL}/blog/${blogPost.urlSlug}`;

  function addBlogJsonLd() {
    const jsonLd = {
      '@context': 'https://schema.org/',
      '@type': 'BlogPosting',
      name: blogPost.Title,
      image: [
        blogPost.ListingCardImage?.data && blogPost.ListingCardImage?.data.attributes
          ? blogPost.ListingCardImage?.data.attributes.url
          : `${SITE_URL}/pic-not-available.gif`,
      ],
      articleBody: blogPost.BlogPostBody,
      keywords: blogPost.seoKeywords,
      description: blogPost.TextPreviewSnippet,
      datePublished: blogPost.Date,
      dateCreated: blogPost.Date,
      dateModified: blogPost.updatedAt || blogPost.Date,
      genre: ['SEO', 'JSON-LD'],
      author: {
        '@type': 'Person',
        name: blogPost.blog_authors_connection.data[0].attributes.AuthorName,
      },
    };
    return { __html: JSON.stringify(jsonLd) };
  }
  return (
    <ContentWrapper>
      <Head>
        <title>{blogPost.Title}</title>
        <meta name="description" content={blogPost.TextPreviewSnippet} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={blogPost.Title} />
        <meta property="og:description" content={blogPost.TextPreviewSnippet} />
        <meta
          property="og:image"
          content={
            blogPost.ogImage?.data && blogPost.ogImage?.data.attributes
              ? blogPost.ogImage?.data.attributes.url
              : `${SITE_URL}/pic-not-available.gif`
          }
        />

        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={addBlogJsonLd()} key="blogpost-jsonld" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Articles', url: '/blog' },
            { name: blogPost.Title },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className={`${styles['blog-post-page']} constrained-content`}>
        <div className={`${styles['blog-post-content']}`}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/blog/">Articles</Link>&nbsp;:&nbsp;
            {blogPost.Title}
          </div>
          <h3 className="text-brand-purple">{blogPost.Title}</h3>
          <p>
            {blogPost.blog_authors_connection.data[0].attributes.AuthorName} | {formattedDate}
          </p>
          <Markdown>{blogPost.BlogPostBody}</Markdown>
        </div>

        <div className={`${styles['sidebar']}`}>
          <ThcAffiliateCTAs affiliates={affiliates} campaign={blogPost.urlSlug} />
          <NewsletterSignup />
        </div>
      </div>
    </ContentWrapper>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_BLOG_SLUGS });

  const paths = data.blogPosts_connection.data.map((blogPost) => {
    return { params: { blogUrlSlug: blogPost.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [{ data }, affiliatesResult] = await Promise.all([
    client.query({
      query: GET_BLOG_POST,
      variables: { urlSlug: params.blogUrlSlug },
    }),
    client.query({ query: GET_ALL_AFFILIATE_PARTNERS }),
  ]);

  const attrs = data.blogPosts_connection.data[0].attributes;
  const affiliates = affiliatesResult.data.affiliatePartners_connection.data.map((partner) => partner.attributes);

  return {
    props: {
      blogPost: attrs,
      affiliates,
    },
  };
}
