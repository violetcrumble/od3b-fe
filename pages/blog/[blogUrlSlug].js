import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_POST } from '../../graphql/queries';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import Markdown from 'react-markdown';
import { BlogPostStyles } from '../../components/blogpost.styled';

const URL = process.env.STRAPIBASEURL;

const client = new ApolloClient({
  uri: `${URL}/graphql`,
  cache: new InMemoryCache()
});

export default function BlogPost({ blogPost }) {
  const formattedDate = new Date(blogPost.Date).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})

  
  function addBlogJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      "name": "${blogPost.Title}",
      "thumbnail": "${blogPost.ListingCardImage.data && blogPost.ListingCardImage.data.attributes ? blogPost.ListingCardImage.data.attributes.url : "/pic-not-available.gif" }",
      "articleBody": "${blogPost.BlogPostBody}",
      "keywords": "${blogPost.seoKeywords}",
      "description": "${blogPost.TextPreviewSnippet}",
      "datePublished": "${blogPost.Date}",
      "dateCreated": "${blogPost.Date}",
      "dateModified": "${blogPost.Date}",
      "genre":["SEO","JSON-LD"],
      "author": {
        "@type": "Person",
        "name": "${blogPost.blog_authors.data[0].attributes.AuthorName}"
      }
    }
  `,
    };
  }

  return (
    <ContentWrapper>

      <Head>
        <title>{blogPost.Title}</title>
        <meta name="description" content={blogPost.TextPreviewSnippet} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={blogPost.Title} />
        <meta property="og:description" content={blogPost.TextPreviewSnippet} />
        <meta property="og:image" content={blogPost.ogImage.data && blogPost.ogImage.data.attributes ? blogPost.ogImage.data.attributes.url : "/pic-not-available.gif" } />
        <meta property="og:url" content={`https://www.cocktailunderground.com/blog/` + blogPost.urlSlug} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBlogJsonLd()}
          key="blogpost-jsonld"
        />
      </Head>

      <ContentWrapperConstrainedStyles>
      
        
        <BlogPostStyles>
        <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/blog/">Articles</Link>&nbsp;:&nbsp;
            {blogPost.Title}</div>

            <h1>{blogPost.Title}</h1>
            <p>{blogPost.blog_authors.data[0].attributes.AuthorName} | {formattedDate}</p>
            <Markdown>{blogPost.BlogPostBody}</Markdown>
        </BlogPostStyles>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  )
}

export async function getStaticPaths() {

  const { data } = await client.query({ query: GET_ALL_BLOG_SLUGS });

  const paths = data.blogPosts.data.map((blogPost) => {
    return { params: { blogUrlSlug: blogPost.attributes.urlSlug } }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const { data } = await client.query({
    query: GET_BLOG_POST,
    variables: { urlSlug: params.blogUrlSlug }
  });

  const attrs = data.blogPosts.data[0].attributes;

  return {
    props: {
      blogPost: attrs
    }
  }
}