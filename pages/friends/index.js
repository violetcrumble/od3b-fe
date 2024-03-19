import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import CreatorCard from '../../components/Cards/CreatorCard/CreatorCard';
import { FriendsStyles } from '../../components/Friends.styled';

import killdevill from '../../public/friends/killdevill.jpg';
import gnome from '../../public/friends/gnome.jpeg';
import mybartender from '../../public/friends/mybartender.jpg';
import subourbondad from '../../public/friends/subourbondad.gif';
import { Listing3ColStyles } from '../../components/Listings3Col.styled';

export default function Friends() {
    return (
        <ContentWrapper>
            <Head>
                <title>One Drink Three Bars - The Best Cocktail Content Creators</title>
                <meta name="description" content="Friends of One Drink Three Bars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContentWrapperConstrainedStyles>
                <FriendsStyles>
                    <h1>Friends of One Drink Three Bars - Our Favorite Cocktail Content Creators</h1>

                    <p>Check out some of my favorite cocktail content creators and influencers!</p>

                    <Listing3ColStyles>
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
                            bio="Richard, aka The Gnome has an awesome YouTube channel and he also makes his own rum at the Happy Raptor Distillery in New Orleans, Louisiana!"
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

                    </Listing3ColStyles>
                </FriendsStyles>

            </ContentWrapperConstrainedStyles>
        </ContentWrapper>
    );
}
