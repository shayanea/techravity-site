import Link from "next/link";
import Logo from "../components/navbar/logo";

function Footer({ router, setting }) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="items">
          <h2>Our Services</h2>
          <ul>
            <li>
              <Link href="/services">
                <a>Dedicated Developers</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Mobile Development</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Web Development</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Product Design</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="items">
          <h2>Join Our Social Community</h2>
          <ul className="socials">
            <li>
              <Link href="https://twitter.com/techravity">
                <a target="_blank" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/techravity">
                <a target="_blank" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/techravity">
                <a target="_blank" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/techravity/">
                <a target="_blank" />
              </Link>
            </li>
            <li>
              <Link href="https://www.behance.net/techravity/">
                <a target="_blank" />
              </Link>
            </li>
            <li>
              <Link href="https://dribbble.com/Techravity">
                <a target="_blank" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="items">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <p>{setting.description}</p>
          <p>
            <span>Tel:</span>
            <a href="tel:+46735859836">+46 735 859 836</a>
          </p>
          <p>
            <span>Email:</span>
            <a href="mailto:Info@techravity.com">Info@techravity.com</a>
          </p>
          <p>
            <span>Address 1: </span>Stureplan 15, 111 45 Stockholm, Sweden
          </p>
          <p>
            <span>Address 2: </span>Bilkent Cyberpark, Cyberplaza A Blok, Ankara, Turkey
          </p>
          {router.pathname !== "/contact" && (
            <Link href="/contactus.html">
              <a className="btn">Contact Us</a>
            </Link>
          )}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>{setting.copyRight}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
