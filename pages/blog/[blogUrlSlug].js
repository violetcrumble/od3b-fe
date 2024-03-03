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

//   function addBlogJsonLd() {
//     return {
//       __html: `{
//       "@context": "https://schema.org/",
//       "@type": "Recipe",
//       "name": "${recipe.title}",
//       "image": [
//         "${recipe.PhotoMain.data.attributes.url}"
//        ],
//        "recipeIngredient": 
//         ${JSON.stringify(recipe.cocktailIngredients.ingredients)}
//        ,
//       "description": "${recipe.recipebody}",
//       "keywords": "${recipe.keywords ? recipe.keywords : "cocktail recipes, easy cocktails to make at home, alcoholic drink recipes"}",
//       "recipeCategory": "Cocktail",
//       "video": {
//         "contentUrl": "${recipe.YouTubeLink}"
//       },
//       "author": "One Drink Three Bars"
//     }
//   `,
//     };
//   }
  return (
    <ContentWrapper>

      <Head>
        <title>{blogPost.Title}</title>
        <meta name="description" content={blogPost.TextPreviewSnippet} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={blogPost.Title} />
        <meta property="og:description" content={blogPost.TextPreviewSnippet} />
        {/* <meta property="og:image" content={recipe.PhotoMain.data.attributes.url} /> */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addRecipeJsonLd()}
          key="recipe-jsonld"
        /> */}
      </Head>

      <ContentWrapperConstrainedStyles>

        <BlogPostStyles>
        <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/blog">Articles</Link></div>
            <h1>{blogPost.Title}</h1>
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

