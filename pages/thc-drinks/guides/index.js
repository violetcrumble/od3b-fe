import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import ListingCard from '../../../components/Cards/ListingCard/ListingCard';
import { GET_ALL_BLOG_POSTS } from '../../../graphql/queries';
import { strapiQueryCached } from '../../../utils/strapiQuery';
import THC_GUIDE_SLUGS from '../../../utils/thcGuideSlugs';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';
import styles from '../../../styles/pages/THC.module.scss';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_ALL_BLOG_POSTS);

  const guides = data.blogPosts.filter((post) => THC_GUIDE_SLUGS.includes(post.urlSlug));

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
        <meta
          name="description"
          content="Practical guides to hemp-derived THC drinks: how much to drink, how they compare to alcohol, THC vs CBD, hangovers, and legality — from real testing."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks/guides`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Guides' },
          ])}
          key="breadcrumb-jsonld"
        />
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

        <h2 className="sr-only">Guides</h2>

        <div className="listings-3-col">
          {guides.map((guide) => (
            <Link className="listing-card" key={guide.urlSlug} href={`/blog/${guide.urlSlug}`}>
              <ListingCard
                title={guide.Title}
                authorName={guide.blog_authors[0].AuthorName}
                date={guide.Date}
                imageUrl={guide.ListingCardImage?.url}
                imageCaption={guide.ListingCardImage?.caption}
                snippet={guide.TextPreviewSnippet}
              />
            </Link>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
