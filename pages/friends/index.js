import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import CreatorCard from '../../components/Cards/CreatorCard/CreatorCard';
import { FriendsStyles } from '../../components/Friends.styled';

import killdevill from '../../public/friends/killdevill.jpg';
import gnome from '../../public/friends/gnome.jpeg';

export default function Friends() {
    return (
        <ContentWrapper>
            <Head>
                <title>One Drink Three Bars</title>
                <meta name="description" content="Friends of One Drink Three Bars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContentWrapperConstrainedStyles>
                <FriendsStyles>
                    <h1>Friends of One Drink Three Bars - Our Favorite Cocktail Content Creators</h1>

                    <p>Check out some of my favorite cocktail content creators and influencers!</p>

                    <div className="creatorCards">
                        <CreatorCard
                            name="Kill-Divill Rum & Cocktails"
                            youTubeURL="https://www.youtube.com/@KillDivill"
                            instagramURL="https://www.instagram.com/kill.divill"
                            bio="I am a rum-lover, cocktail hobbyist, and craft/local spirit enthusiast, and I hope to share what I know and grow even more."
                            creatorImage={killdevill}
                            />

                        <CreatorCard
                            name="Gnome's Tavern"
                            youTubeURL="https://www.youtube.com/@gnomestavern8285"
                            instagramURL="https://www.instagram.com/gnomestavern"
                            bio="Richard, aka The Gnome has an awesome YouTube channel and he also makes his own rum at the Happy Raptor Distillery in New Orleans, Louisiana!"
                            creatorImage={gnome}
                        />

                        <div></div>

                    </div>
                </FriendsStyles>

            </ContentWrapperConstrainedStyles>
        </ContentWrapper>
    );
}
