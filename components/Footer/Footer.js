import SocialLinks from '../SocialLinks/SocialLinks';
import Link from 'next/link';
import Image from 'next/image';

var currentTime = new Date();

export default function Footer() {
  return <footer>

    <div className="footer-grid-main">
      
      <div className="footer-logo">
        <Link href="/" className="logo">
          <Image src="/logo.svg" alt="Cocktail Underground" width="200" height="70" />
        </Link>
      </div>

      <div className="footer-main-nav footer-nav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/cocktail-recipes">Cocktail Recipes</Link></li>
          <li><Link href="/blog">Articles</Link></li>
          <li><Link href="/home-bar-supplies">Home Bar Supplies</Link></li>
          <li><Link href="/friends">Our Friends</Link></li>
        </ul>
      </div>

      <div className="footer-recipe-nav footer-nav">
        <ul>
          <li><Link href="/cocktail-recipes?category=tequila">Tequila Cocktail Recipes</Link></li>
          <li><Link href="/cocktail-recipes?category=mezcal">Mezcal Cocktail Recipes</Link></li>
          <li><Link href="/cocktail-recipes?category=whiskey">Whiskey Cocktail Recipes</Link></li>
          <li><Link href="/cocktail-recipes?category=rum">Rum Cocktail Recipes</Link></li>
          <li><Link href="/cocktail-recipes?category=cachaça">Cachaça Cocktail Recipes</Link></li>
          <li><Link href="/cocktail-recipes?category=gin">Gin Cocktail Recipes</Link></li>
          <li><Link href="/cocktail-recipes?category=vodka">Vodka Cocktail Recipes</Link></li>
        </ul>
      </div>

    </div>

    <div className="footer-social-copy">
      <SocialLinks />
      <p>Copyright &copy; {currentTime.getFullYear()} Cocktail Underground</p>
    </div>

    
  </footer>;
}
