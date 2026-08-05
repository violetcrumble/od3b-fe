import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import CreatorCard from '../../components/Cards/CreatorCard/CreatorCard';
import allaboutthecocktail from '../../public/friends/allaboutthecocktail.jpg';
import killdevill from '../../public/friends/killdevill.jpg';
import gnome from '../../public/friends/gnome.jpeg';
import mybartender from '../../public/friends/mybartender.jpg';
import subourbondad from '../../public/friends/subourbondad.gif';
import waxseal from '../../public/friends/waxseal.jpg';
import styles from '../../styles/pages/Friends.module.scss';
import SITE_URL from '../../utils/siteUrl';

export default function Friends() {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - The Best Cocktail Content Creators</title>
        <meta
          name="description"
          content="Cocktail creators we love: YouTube channels, homemade bitters, custom cocktail design, and more friends of Cocktail Underground worth a follow."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/friends`} />
      </Head>
      <div className={`${styles['friends-page']} constrained-content`}>
        <h1 className="text-brand-purple">Friends of Cocktail Underground</h1>

        <p>Check out some of my favorite cocktail content creators and influencers!</p>

        <div className="friend-cards listings-2-col">
          <CreatorCard
            id="its-all-about-the-cocktail"
            name="It's All About the Cocktail"
            youTubeURL="https://www.youtube.com/@itsallaboutthecocktail"
            instagramURL="https://www.instagram.com/itsallaboutthec"
            facebookURL="https://www.facebook.com/Its-all-about-the-cocktail-1940245666008915"
            bio="Ray explores and simplifies cocktails, their ingredients, and their culture with how-to videos, tips, and cocktail, beer, and spirit reviews. Not a bartender, just a cocktail enthusiast showing how easily drinks can be made at home, which saves you time and money and lessens the possibility of drinking and driving."
            creatorImage={allaboutthecocktail}
            websiteURL="https://www.itsallaboutthecocktail.com"
          />

          <CreatorCard
            id="my-bartender"
            name="My Bartender"
            youTubeURL="https://www.youtube.com/@mybartender"
            instagramURL="https://www.instagram.com/_mybartender/"
            facebookURL="https://www.facebook.com/mybartenderblog"
            bio="As a leading digital media company and online magazine, we delve deep into the vibrant world of cocktails and liquors, offering our audience an intoxicating blend of engaging content, expert insights, and curated reviews."
            creatorImage={mybartender}
            websiteURL="https://www.mybartender.com"
          />

          <CreatorCard
            id="wax-seal-productions"
            name="Wax Seal Productions"
            youTubeURL="https://www.youtube.com/@waxsealproductions"
            instagramURL="https://www.instagram.com/waxsealproductions"
            bio="Featuring custom cocktail designs by Wax Seal Productions, taste testing spirits and foods, cocktail tips and tricks, and cocktails we find interesting. We design cocktails for bars, restaurants, events, and literary cocktails around books, films, and shows. Visit my website for more information."
            creatorImage={waxseal}
            websiteURL="https://www.waxsealproductions.ca"
          />

          <CreatorCard
            id="gnomes-tavern"
            name="Gnome's Tavern"
            youTubeURL="https://www.youtube.com/@gnomestavern8285"
            instagramURL="https://www.instagram.com/gnomestavern"
            facebookURL="https://www.facebook.com/TavernGnome"
            bio="Richard, aka The Gnome has an awesome YouTube channel and he also makes his own bitters, which you can find on his Etsy site!"
            creatorImage={gnome}
            websiteURL="https://www.etsy.com/shop/GnomesTavernBitters"
          />

          <CreatorCard
            id="kill-divill"
            name="Kill-Divill Rum & Cocktails"
            youTubeURL="https://www.youtube.com/@KillDivill"
            instagramURL="https://www.instagram.com/kill.divill"
            facebookURL="https://www.facebook.com/killdivill"
            bio="I am a rum-lover, cocktail hobbyist, and craft/local spirit enthusiast, and I hope to share what I know to learn even more."
            creatorImage={killdevill}
          />

          <CreatorCard
            id="the-subourbon-dad"
            name="The Subourbon Dad"
            youTubeURL="https://www.youtube.com/@TheSubourbonDad"
            instagramURL="https://www.instagram.com/the.subourbondad"
            facebookURL="https://www.facebook.com/TheSubourbonDad"
            bio="Juggling baby bottles and whiskey glasses while mastering the ins and outs of bourbon. I may still be figuring out how to raise kids, but I've learned a thing or two about bourbon."
            creatorImage={subourbondad}
          />

          <div className="listing-card listing-card-ph">&nbsp;</div>
        </div>

        <p>
          Make cocktail content and want to be on this page? Say hi on{' '}
          <a href="https://www.youtube.com/@CocktailUnderground" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>{' '}
          or{' '}
          <a href="https://www.instagram.com/cocktail_underground/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          , or email me at <a href="mailto:bonnie@cocktailunderground.com">bonnie@cocktailunderground.com</a> and
          let&apos;s talk.
        </p>
      </div>
    </ContentWrapper>
  );
}
