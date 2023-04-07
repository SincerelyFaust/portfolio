import Document, { Head, Html, Main, NextScript } from "next/document";

export default class WebsiteDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="keywords"
            content="portfolio, marin heđeš, faust, personal website, sincerelyfaust, founder, developer, graphic designer, motion designer, web developer"
          />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/44751736?v=4"
          />
          <meta property="og:site_name" content="Marin Heđeš" />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon.ico"
          />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#c9c9c9" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#c9c9c9"
          />
          <meta name="apple-mobile-web-app-title" content="Marin Heđeš" />
          <meta
            name="msapplication-TileImage"
            content="/images/favicon/favicon.ico"
          />
          <meta name="msapplication-TileColor" content="#c9c9c9" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
