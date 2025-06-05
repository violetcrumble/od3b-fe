import Image from 'next/image';
import Link from 'next/link';
import heroBanner from '../../public/hero5.jpg';

export default function HeroImage() {
  return (
    <div>
      <div className="imageWrapper">
        <Image
          priority
          src={heroBanner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className="heroContent">
      <h3>Empowering you to create craft cocktails at home</h3>
      <Link href="https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ" target="_blank" className="youtube-button">Watch Our YouTube Videos</Link>
          
      </div>
    </div>
  );
}




