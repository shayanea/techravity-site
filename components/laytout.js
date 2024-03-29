import Link from "next/link";
import Head from "next/head";

const year = new Date().getFullYear();

export default ({ children, router }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="google" value="notranslate" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta
        name="description"
        content="Techravity is a dedicated group of professionals who strive to deliver your tailor-made software solutions based on the best technological practices."
      />
      <meta name="google-site-verification" content="ondKXwN1V4cD1XRX46GXhnTHzbqTvvl6w59XgyCBmhM" />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/images/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/images/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/images/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/images/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/images/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/images/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/images/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/images/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/static/images/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <link href="https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/responsive.css" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
    </Head>
    {children}
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
          <p>Techravity is a dedicated group of professionals who strive to deliver your tailor-made software solutions based on the best technological practices.</p>
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
          {router.pathname !== "/contactus" && (
            <Link href="/contactus">
              <a className="btn">Contact Us</a>
            </Link>
          )}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>@ {year} Techravity - IT Solution Company</p>
        </div>
      </div>
    </footer>
  </div>
);
