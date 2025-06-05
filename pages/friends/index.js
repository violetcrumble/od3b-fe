import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import CreatorCard from '../../components/Cards/CreatorCard/CreatorCard';
import killdevill from '../../public/friends/killdevill.jpg';
import gnome from '../../public/friends/gnome.jpeg';
import mybartender from '../../public/friends/mybartender.jpg';
import subourbondad from '../../public/friends/subourbondad.gif';
import waxseal from '../../public/friends/waxseal.jpg';

export default function Friends() {
    return (
        <ContentWrapper>
            <Head>
                <title>Cocktail Underground - The Best Cocktail Content Creators</title>
                <meta name="description" content="Friends of Cocktail Underground" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

                    <h1>Friends of Cocktail Underground - Our Favorite Cocktail Content Creators</h1>

                    <p>Check out some of my favorite cocktail content creators and influencers!</p>

                    <div className="friend-cards">
                        <CreatorCard
                            name="Wax Seal Productions"
                            youTubeURL="https://www.youtube.com/@waxsealproductions"
                            instagramURL="https://www.instagram.com/waxsealproductions"
                            bio="Featuring custom cocktail designs by Wax Seal Productions, taste testing spirits and foods, cocktail tips and tricks, and cocktails we find interesting. We design cocktails for bars, restaurants, events, and literary cocktails around books, films, and shows. A proud member of the Shaken & Stirred Cocktail Designers and lovers of unique flavour profiles. Wax Seal Productions is an intellectual property management and content creation company with a focus on literary arts, cocktail design, and creative coaching. Visit my website for more information."
                            creatorImage={waxseal}
                            websiteURL="https://www.waxsealproductions.ca"
                        />

                        <CreatorCard
                            name="Kill-Divill Rum & Cocktails"
                            youTubeURL="https://www.youtube.com/@KillDivill"
                            instagramURL="https://www.instagram.com/kill.divill"
                            facebookURL="https://www.facebook.com/killdivill"
                            bio="I am a rum-lover, cocktail hobbyist, and craft/local spirit enthusiast, and I hope to share what I know to learn even more."
                            creatorImage={killdevill}
                        />

                        <CreatorCard
                            name="Gnome's Tavern"
                            youTubeURL="https://www.youtube.com/@gnomestavern8285"
                            instagramURL="https://www.instagram.com/gnomestavern"
                            facebookURL="https://www.facebook.com/TavernGnome"
                            bio="Richard, aka The Gnome has an awesome YouTube channel and he also makes his own bitters, which you can find on his Etsy site!"
                            creatorImage={gnome}
                        />

                        <CreatorCard
                            name="The Subourbon Dad"
                            youTubeURL="https://www.youtube.com/@TheSubourbonDad"
                            instagramURL="https://www.instagram.com/the.subourbondad"
                            facebookURL="https://www.facebook.com/TheSubourbonDad"
                            bio="Juggling baby bottles and whiskey glasses while mastering the ins and outs of bourbon. I may still be figuring out how to raise kids, but I've learned a thing or two about bourbon."
                            creatorImage={subourbondad}
                        />

                        <CreatorCard
                            name="My Bartender"
                            youTubeURL="https://www.youtube.com/@mybartender"
                            instagramURL="https://www.instagram.com/_mybartender/"
                            facebookURL="https://www.facebook.com/mybartenderblog"
                            bio="As a leading digital media company and online magazine, we delve deep into the vibrant world of cocktails and liquors, offering our audience an intoxicating blend of engaging content, expert insights, and curated reviews."
                            creatorImage={mybartender}
                            websiteURL="https://www.mybartender.com"
                        />

                        <div className='listing-card listing-card-ph'>&nbsp;</div>
                    </div>

           
        </ContentWrapper>
    );
}
