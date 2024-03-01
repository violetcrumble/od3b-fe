import { gql } from '@apollo/client';

const GET_ALL_RECIPE_SLUGS = gql`
query {
    recipes(pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
        }
      }
    }
  }
`;

const GET_ALL_RECIPES = gql`
query {
  recipes(pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        PhotoMain {
          data {
            attributes {
              url
              caption
            }
          }
        }
      }
    }
  }
  }
`;

const GET_INDIVIDUAL_RECIPE = gql`
query ($recipeUrlSlug: String!) {
    recipes(filters: { recipeUrlSlug: { eq: $recipeUrlSlug } }) {
        data {
          attributes {
            title
            keywords
            RecipeIntro
            ingredients
            cocktailIngredients
            recipebody
            recipeUrlSlug
            YouTubeLink
            youTubeID
            PhotoMain {
              data {
                attributes {
                  url
                  caption
                }
              }
            }
            relatedProducts {
              data {
                attributes {
                  AmazonLink
                  AmazonASIN
                  AmazonPhotoURL
                  ProductName
                  ProductCategory
                }
              }
            }
          }
        }
        }
  }
`;

const GET_AMAZON_PRODUCTS = gql`
query {products(pagination: { limit: 300 }) {
  data {
    attributes {
      AmazonLink
      AmazonASIN
      ProductName
      ProductCategory
    }
  }
}}
`;

const GET_ALL_BLOG_SLUGS = gql`query {
  blogPosts(pagination: { limit: 300 }) {
    data {
      attributes {
        urlSlug
      }
    }
  }
}`;

const GET_ALL_BLOG_POSTS = gql`query {blogPosts(pagination: { limit: 300 }) {
  data {
    attributes {
      Title
      urlSlug
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
}}`;

const GET_BLOG_POST = gql`query ($urlSlug: String!) {
  blogPosts(filters: { urlSlug: { eq: $urlSlug } }) {
    data {
      attributes {
       urlSlug
        blog_authors {
        data {
          attributes {
            AuthorName
          }
        }
      }
       BlogPostBody
      }
    }
      }
}`;

export { GET_ALL_RECIPE_SLUGS, GET_ALL_RECIPES, GET_INDIVIDUAL_RECIPE, GET_AMAZON_PRODUCTS, GET_ALL_BLOG_SLUGS, GET_ALL_BLOG_POSTS, GET_BLOG_POST };