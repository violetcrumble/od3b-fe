import Image from 'next/image';
import styles from './CreatorCard.module.scss';
import Markdown from 'react-markdown';

export default function CreatorCard(props) {
  return (
    <div id={props.id} className={`${styles['creator-card']} listing-card`}>
      <h4>{props.name}</h4>
      <p className={`${styles['socials']}`}>
        <a href={props.youTubeURL} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        &nbsp;|&nbsp;
        <a href={props.instagramURL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        {props.facebookURL && (
          <>
            {' '}
            |{' '}
            <a href={props.facebookURL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </>
        )}
        {props.websiteURL && (
          <>
            {' '}
            |{' '}
            <a href={props.websiteURL} target="_blank" rel="noopener noreferrer">
              {props.websiteURL.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
            </a>
          </>
        )}
      </p>

      <div className={`${styles['creator-info']}`}>
        <div>
          <Markdown>{props.bio}</Markdown>
        </div>

        <div className="creator-image-container">
          <Image src={props.creatorImage.src} alt={props.name} width="150" height="150" />
        </div>
      </div>
    </div>
  );
}
