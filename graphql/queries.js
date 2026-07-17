import { gql } from '@apollo/client';

const GET_ALL_RECIPE_SLUGS = gql`
  query {
    recipes_connection(pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          updatedAt
        }
      }
    }
  }
`;

const GET_ALL_RECIPE_SUMMARIES = `
query {
  recipes_connection(pagination: { limit: 300 }) {
    data {
      attributes {
        title
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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

const GET_ALL_RECIPES = `
query {
  recipes_connection(pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "tequila" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "tequila" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "mezcal" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "mezcal" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "whiskey" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "whiskey" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "rum" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "rum" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "cachaça" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "cachaça" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "gin" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "gin" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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
    recipes_connection(filters: { spirits: { spirit: { contains: "vodka" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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
  recipes_connection(filters: { spirits: { spirit: { contains: "vodka" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {  
              spirit
            }
          }
        }
        PhotoMain_connection {
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

const GET_ALL_THC_RECIPE_SLUGS = gql`
  query {
    recipes_connection(filters: { spirits: { spirit: { contains: "thc" } } }, pagination: { limit: 300 }) {
      data {
        attributes {
          recipeUrlSlug
          spirits_connection {
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

const GET_ALL_THC_RECIPES = `
query {
  recipes_connection(filters: { spirits: { spirit: { contains: "thc" } } }, pagination: { limit: 300 }) {
    data {
      attributes {
        title
        ingredients
        recipebody
        recipeUrlSlug
        spirits_connection {
          data {
            attributes {
              spirit
            }
          }
        }
        PhotoMain_connection {
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

const GET_LATEST_RECIPES = `
query {
  recipes_connection(pagination: { limit: 5 }, sort: "createdAt:desc") {
    data {
      attributes {
        title
        recipeUrlSlug
        createdAt
        PhotoMain_connection {
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
    recipes_connection(filters: { recipeUrlSlug: { eq: $recipeUrlSlug } }) {
      data {
        attributes {
          title
          keywords
          seoDescription
          RecipeIntro
          ingredients
          cocktailIngredients
          recipebody
          recipeUrlSlug
          YouTubeLink
          youTubeID
          videoUploadDate
          ratingCount
          ratingTotal
          spirits_connection {
            data {
              attributes {
                spirit
              }
            }
          }
          PhotoMain_connection {
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
          relatedProducts_connection {
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
query {products_connection(pagination: { limit: 300 }) {
  data {
    id
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

const GET_ALL_BLOG_SLUGS = gql`
  query {
    blogPosts_connection(pagination: { limit: 300 }) {
      data {
        attributes {
          urlSlug
          updatedAt
        }
      }
    }
  }
`;

const GET_ALL_BLOG_POSTS = `{blogPosts_connection(pagination: { limit: 300 }) {
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
      blog_authors_connection {
          data {
            attributes {
              AuthorName
            }
          }
        }
    }
  }
}}`;

const GET_BLOG_POST = gql`
  query ($urlSlug: String!) {
    blogPosts_connection(filters: { urlSlug: { eq: $urlSlug } }) {
      data {
        attributes {
          Title
          Date
          updatedAt
          seoKeywords
          seoDescription
          ogImage {
            data {
              attributes {
                url
                caption
              }
            }
          }
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
          blog_authors_connection {
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
  }
`;

const GET_ALL_REVIEW_SLUGS = gql`
  query {
    reviews_connection(pagination: { limit: 300 }) {
      data {
        attributes {
          reviewUrlSlug
          updatedAt
        }
      }
    }
  }
`;

const GET_ALL_REVIEWS = `{reviews_connection(pagination: { limit: 300 }) {
  data {
    attributes {
      reviewUrlSlug
      title
      productName
      reviewDate
      previewSnippet
      rating
      listingCardImage {
        data {
          attributes {
            url
            caption
          }
        }
      }
      review_authors_connection {
        data {
          attributes {
            AuthorName
          }
        }
      }
    }
  }
}}`;

const GET_REVIEW = gql`
  query ($reviewUrlSlug: String!) {
    reviews_connection(filters: { reviewUrlSlug: { eq: $reviewUrlSlug } }) {
      data {
        attributes {
          title
          productName
          reviewUrlSlug
          reviewDate
          updatedAt
          reviewBody
          previewSnippet
          verdict
          disclaimer
          rating
          pros
          cons
          price
          buyUrl
          seoKeywords
          seoDescription
          listingCardImage {
            data {
              attributes {
                url
                caption
                alternativeText
              }
            }
          }
          ogImage {
            data {
              attributes {
                url
                caption
              }
            }
          }
          review_authors_connection {
            data {
              attributes {
                AuthorName
              }
            }
          }
          relatedProducts_connection {
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

const GET_ALL_SPIRITS = gql`
  query ($urlSlug: String!) {
    spirits_connection {
      data {
        attributes {
          spirit
        }
      }
    }
  }
`;

export {
  GET_ALL_RECIPE_SLUGS,
  GET_ALL_RECIPES,
  GET_ALL_RECIPE_SUMMARIES,
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
  GET_ALL_THC_RECIPE_SLUGS,
  GET_ALL_THC_RECIPES,
  GET_LATEST_RECIPES,
  GET_INDIVIDUAL_RECIPE,
  GET_AMAZON_PRODUCTS,
  GET_ALL_BLOG_SLUGS,
  GET_ALL_BLOG_POSTS,
  GET_BLOG_POST,
  GET_ALL_SPIRITS,
  GET_ALL_REVIEW_SLUGS,
  GET_ALL_REVIEWS,
  GET_REVIEW,
};
