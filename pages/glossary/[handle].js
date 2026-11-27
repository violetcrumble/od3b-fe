import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { GET_GLOSSARY_HANDLES, GET_GLOSSARY_PAGE, GET_ALL_AFFILIATE_PARTNERS } from '../../graphql/queries';
import { strapiQuery, strapiQueryCached } from '../../utils/strapiQuery';
import ContentWrapper from '../../components/ContentWrapper';
import Glossary from '../../components/Glossary/Glossary';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import Byline from '../../components/Byline/Byline';
import ThcAffiliateCTAs from '../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import getBreadcrumbJsonLd from '../../utils/breadcrumbJsonLd';
import SITE_URL from '../../utils/siteUrl';
import cloudinaryOptimize from '../../utils/cloudinaryOptimize';
import markdownLinkComponents from '../../utils/markdownLinkComponents';
import { getGlossaryArticleJsonLd, getGlossaryJsonLd, glossaryPages } from '../../utils/glossary';
import { PARTNER_CATEGORIES, partnersInCategory } from '../../utils/partnerCategory';
// A glossary page is laid out like a blog post (text on the left, sidebar on
// the right), so it borrows the blog post styles rather than repeating them.
import styles from '../../styles/pages/BlogPost.module.scss';

// The intro and closing text are written in Strapi as Markdown.
function GlossaryText({ children }) {
  if (!children?.trim()) return null;
  return (
    <Markdown components={markdownLinkComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
      {children}
    </Markdown>
  );
}

// One Glossary from Strapi: its intro, its terms A to Z, then its closing text.
export default function GlossaryPage({ glossary, terms, affiliates }) {
  const title = glossary.title || glossary.name;
  const canonicalUrl = `${SITE_URL}/glossary/${glossary.handle}`;

  return (
    <ContentWrapper>
      <Head>
        <title>{title}</title>
        {glossary.seoDescription && <meta name="description" content={glossary.seoDescription} />}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        {glossary.seoDescription && <meta property="og:description" content={glossary.seoDescription} />}
        <meta
          property="og:image"
          content={cloudinaryOptimize(glossary.shareImage?.url, 1200) || `${SITE_URL}/pic-not-available.gif`}
        />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getGlossaryJsonLd(terms, canonicalUrl, glossary.name)}
          key="glossary-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getGlossaryArticleJsonLd(glossary, canonicalUrl)}
          key="article-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: title }])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className={`${styles['blog-post-page']} constrained-content`}>
        <div className={styles['blog-post-content']}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            {title}
          </div>
          <h1 className="text-brand-purple">{title}</h1>
          {/* The byline needs both an author and a published date set on the glossary in Strapi. */}
          {glossary.author && glossary.datePublished && (
            <Byline
              authorName={glossary.author.AuthorName}
              date={glossary.datePublished}
              updatedDate={glossary.lastUpdated}
            />
          )}
          <GlossaryText>{glossary.intro}</GlossaryText>
          <Glossary terms={terms} headingLevel={2} />
          <GlossaryText>{glossary.closing}</GlossaryText>
        </div>

        <div className={styles.sidebar}>
          <p className={styles.disclaimer}>
            Links marked with a cart icon and the product links in the sidebar are affiliate links. We may earn a
            commission if you buy through one, at no extra cost to you.
          </p>
          <ThcAffiliateCTAs affiliates={affiliates} campaign={`glossary-${glossary.handle}`} />
          <NewsletterSignup />
        </div>
      </div>
    </ContentWrapper>
  );
}

// A glossary gets a page once it has at least one published term.
export async function getStaticPaths() {
  const data = await strapiQuery(GET_GLOSSARY_HANDLES);

  return {
    paths: glossaryPages(data.glossaryTerms).map((glossary) => ({ params: { handle: glossary.handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [data, affiliatesData] = await Promise.all([
    strapiQuery(GET_GLOSSARY_PAGE, { handle: params.handle }),
    strapiQueryCached(GET_ALL_AFFILIATE_PARTNERS),
  ]);

  return {
    props: {
      glossary: data.glossaries[0],
      terms: data.glossaryTerms,
      // Glossary pages show the non-THC drink partners in the sidebar.
      affiliates: partnersInCategory(affiliatesData.affiliatePartners, PARTNER_CATEGORIES.drinks),
    },
  };
}
