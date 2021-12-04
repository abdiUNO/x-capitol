import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          {/*<meta name="viewport" content="width=device-width,initial-scale=1" />*/}
          <meta property="og:image" content="" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Eczar:400,700|Montserrat:400,700|Poppins:300,400|Roboto+Mono|Roboto:400,500,900|Spectral"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.png" />

          <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />

          <link rel="icon" type="image/png" href="/assets/images/favicon.png" />

          <meta property="og:title" content="X Capitol" />
          <meta property="og:description" content="Business Consultants" />
          <meta
            property="og:image"
            content="https://x-capitol.com/images/x_capitol_hero_image.jpeg"
          />
          <meta property="og:url" content="https://x-capitol.com" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="X Capitol" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="x capitol" />
          <meta name="twitter:image:alt" content="image alt text" />

          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4736ca" />
          <meta name="msapplication-TileColor" content="#4736ca" />
          <meta name="theme-color" content="#4736ca" />

          {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}

          <meta name="title" content="X Capitol" />
          <meta name="description" content="Get your business funded today!" />
          <meta name="keywords" content="business,finance, funding" />
          <meta name="robots" content="index, follow" />

          {/*<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />*/}
          <meta name="language" content="English" />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
