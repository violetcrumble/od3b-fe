import { gql } from '@apollo/client';

const GET_ALL_RECIPE_SLUGS = gql`
  query {
    recipes(pagination: { limit: 300 }) {
      recipeUrlSlug
      updatedAt
    }
  }
`;

const GET_ALL_RECIPE_SUMMARIES = `
query {
  recipes(pagination: { limit: 300 }) {
    title
    recipeUrlSlug
    spirits {
      spirit
    }
    PhotoMain {
      url
      caption
    }
  }
}
`;

const GET_ALL_RECIPES = `
query {
  recipes(pagination: { limit: 300 }) {
    title
    ingredients
    recipebody
    recipeUrlSlug
    spirits {
      spirit
    }
    PhotoMain {
      url
      caption
    }
  }
}
`;

const GET_ALL_THC_RECIPES = `
query {
  recipes(filters: { spirits: { spirit: { contains: "thc" } } }, pagination: { limit: 300 }) {
    title
    ingredients
    recipebody
    recipeUrlSlug
    spirits {
      spirit
    }
    PhotoMain {
      url
      caption
    }
  }
}
`;

const GET_LATEST_RECIPES = `
query {
  recipes(pagination: { limit: 5 }, sort: "createdAt:desc") {
    title
    recipeUrlSlug
    createdAt
    PhotoMain {
      url
      caption
    }
  }
}
`;

const GET_INDIVIDUAL_RECIPE = gql`
  query ($recipeUrlSlug: String!) {
    recipes(filters: { recipeUrlSlug: { eq: $recipeUrlSlug } }) {
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
      spirits {
        spirit
      }
      PhotoMain {
        url
        caption
        alternativeText
      }
      videoThumbnail {
        url
        caption
        alternativeText
      }
      PhotoPinterest {
        url
        caption
        alternativeText
      }
      relatedProducts {
        AmazonLink
        AmazonASIN
        AmazonPhotoURL
        ProductName
        ProductCategory
      }
    }
  }
`;

const GET_AMAZON_PRODUCTS = `
query {
  products(pagination: { limit: 300 }) {
    documentId
    AmazonLink
    AmazonASIN
    AmazonPhotoURL
    ProductName
    ProductCategory
  }
}
`;

const GET_ALL_BLOG_SLUGS = gql`
  query {
    blogPosts(pagination: { limit: 300 }) {
      urlSlug
      updatedAt
    }
  }
`;

const GET_ALL_BLOG_POSTS = `{
  blogPosts(pagination: { limit: 300 }) {
    urlSlug
    Title
    Date
    TextPreviewSnippet
    ListingCardImage {
      url
      caption
    }
    blog_authors {
      AuthorName
    }
  }
}`;

const GET_BLOG_POST = gql`
  query ($urlSlug: String!) {
    blogPosts(filters: { urlSlug: { eq: $urlSlug } }) {
      Title
      Date
      updatedAt
      seoKeywords
      seoDescription
      ogImage {
        url
        caption
      }
      urlSlug
      TextPreviewSnippet
      ListingCardImage {
        url
        caption
      }
      blog_authors {
        AuthorName
      }
      BlogPostBody
    }
  }
`;

const GET_ALL_REVIEW_SLUGS = gql`
  query {
    reviews(pagination: { limit: 300 }) {
      reviewUrlSlug
      updatedAt
    }
  }
`;

const GET_ALL_REVIEWS = `{
  reviews(pagination: { limit: 300 }) {
    reviewUrlSlug
    title
    productName
    reviewDate
    previewSnippet
    rating
    listingCardImage {
      url
      caption
    }
    review_authors {
      AuthorName
    }
  }
}`;

const GET_REVIEW = gql`
  query ($reviewUrlSlug: String!) {
    reviews(filters: { reviewUrlSlug: { eq: $reviewUrlSlug } }) {
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
        url
        caption
        alternativeText
      }
      ogImage {
        url
        caption
      }
      review_authors {
        AuthorName
      }
      relatedProducts {
        AmazonLink
        AmazonASIN
        AmazonPhotoURL
        ProductName
        ProductCategory
      }
    }
  }
`;

const GET_ALL_AFFILIATE_PARTNERS = gql`
  query {
    affiliatePartners(sort: "displayOrder:asc", pagination: { limit: 50 }) {
      name
      blurb
      baseUrl
      cta
      photoUrl
    }
  }
`;

export {
  GET_ALL_RECIPE_SLUGS,
  GET_ALL_RECIPES,
  GET_ALL_RECIPE_SUMMARIES,
  GET_ALL_THC_RECIPES,
  GET_LATEST_RECIPES,
  GET_INDIVIDUAL_RECIPE,
  GET_AMAZON_PRODUCTS,
  GET_ALL_BLOG_SLUGS,
  GET_ALL_BLOG_POSTS,
  GET_BLOG_POST,
  GET_ALL_REVIEW_SLUGS,
  GET_ALL_REVIEWS,
  GET_REVIEW,
  GET_ALL_AFFILIATE_PARTNERS,
};
