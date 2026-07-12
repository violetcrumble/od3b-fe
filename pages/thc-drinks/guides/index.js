import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import BlogListingCard from '../../../components/Cards/BlogListingCard/BlogListingCard';
import { GET_ALL_BLOG_POSTS } from '../../../graphql/queries';
import THC_GUIDE_SLUGS from '../../../utils/thcGuideSlugs';
import styles from '../../../styles/pages/THC.module.scss';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
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

  const guides = data.data.blogPosts.data.filter((post) => THC_GUIDE_SLUGS.includes(post.attributes.urlSlug));

  return {
    props: {
      guides,
    },
  };
}

export default function THCGuides({ guides }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks - Guides</title>
        <meta name="description" content="THC Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp; Guides
        </div>

        <h1 className="text-brand-purple">THC Guides</h1>

        <p>
          Practical answers about hemp-derived THC drinks — what they feel like, how to dose them, and how they stack up
          against alcohol. Written from actual testing, not press releases.
        </p>

        <div className="listings-3-col">
          {guides.map((guide) => (
            <Link
              className="listing-card"
              key={guide.attributes.urlSlug}
              href={`/blog/${guide.attributes.urlSlug}`}
              rel="canonical"
            >
              <BlogListingCard blogPost={guide} />
            </Link>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
