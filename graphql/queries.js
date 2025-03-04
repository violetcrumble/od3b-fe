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

const GET_ALL_RECIPES = `
query {
  recipes(pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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

const GET_ALL_TEQUILA_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "tequila" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
          data {
            attributes {
              spirit
            }
          }
        }
        }
      }
    }
  }
`;

const GET_ALL_TEQUILA_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "tequila" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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


const GET_ALL_MEZCAL_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "mezcal" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
            data {
              attributes {
                spirit
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_MEZCAL_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "mezcal" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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

const GET_ALL_WHISKEY_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "whiskey" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
            data {
              attributes {
                spirit
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_WHISKEY_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "whiskey" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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

const GET_ALL_RUM_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "rum" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
            data {
              attributes {
                spirit
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_RUM_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "rum" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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

const GET_ALL_CACHACA_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "cachaça" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
            data {
              attributes {
                spirit
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_CACHACA_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "cachaça" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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

const GET_ALL_GIN_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "gin" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
            data {
              attributes {
                spirit
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_GIN_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "gin" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {
              spirit
            }
          }
        }
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

const GET_ALL_VODKA_RECIPE_SLUGS = gql`
query {
    recipes(filters: { spirits: { spirit: { contains: "vodka" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits {
            data {
              attributes {
                spirit
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_VODKA_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "vodka" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits {
          data {
            attributes {  
              spirit
            }
          }
        }
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
                  alternativeText
                }
              }
            }
            videoThumbnail {
              data {
                attributes {
                  url
                  caption
                  alternativeText
                }
              }
            }
            PhotoPinterest {
              data {
                attributes {
                  url
                  caption
                  alternativeText
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

const GET_AMAZON_PRODUCTS = `
query {products(pagination: { limit: 300 }) {
  data {
    attributes {
      AmazonLink
      AmazonASIN
      AmazonPhotoURL
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

const GET_ALL_BLOG_POSTS = `{blogPosts(pagination: { limit: 300 }) {
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
}}`;

const GET_BLOG_POST = gql`query ($urlSlug: String!) {
  blogPosts(filters: { urlSlug: { eq: $urlSlug } }) {
    data {
      attributes {
        Title
        Date
        seoKeywords
        seoDescription
        urlSlug
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
       BlogPostBody
      }
    }
      }
}`;

const GET_ALL_SPIRITS = gql`query ($urlSlug: String!) {
  spirits {
    data {
      attributes {
        spirit
      }
    }
  }}`;

export { 
  GET_ALL_RECIPE_SLUGS, 
  GET_ALL_RECIPES, 
  GET_ALL_TEQUILA_RECIPE_SLUGS, 
  GET_ALL_TEQUILA_RECIPES, 
  GET_ALL_MEZCAL_RECIPES, 
  GET_ALL_MEZCAL_RECIPE_SLUGS, 
  GET_ALL_RUM_RECIPE_SLUGS, 
  GET_ALL_RUM_RECIPES, 
  GET_ALL_WHISKEY_RECIPE_SLUGS, 
  GET_ALL_WHISKEY_RECIPES, 
  GET_ALL_CACHACA_RECIPE_SLUGS, 
  GET_ALL_CACHACA_RECIPES, 
  GET_ALL_GIN_RECIPE_SLUGS, 
  GET_ALL_GIN_RECIPES, 
  GET_ALL_VODKA_RECIPE_SLUGS, 
  GET_ALL_VODKA_RECIPES, 
  GET_INDIVIDUAL_RECIPE, 
  GET_AMAZON_PRODUCTS, 
  GET_ALL_BLOG_SLUGS, 
  GET_ALL_BLOG_POSTS, 
  GET_BLOG_POST, 
  GET_ALL_SPIRITS };