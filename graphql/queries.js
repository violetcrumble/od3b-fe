import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
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
          }
        }
        }
  }
`;

export { GET_ALL_SLUGS, GET_ALL_RECIPES, GET_INDIVIDUAL_RECIPE };