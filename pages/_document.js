import Document, { Head, Html, Main, NextScript } from 'next/document';
import { FB_PIXEL_ID } from '../lib/fpixel';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <title>Home | X Capitol</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          <meta
            name="facebook-domain-verification"
            content="6mlkn3mi1bvrv35aojqjm71sjiz891"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Eczar:400,700|Montserrat:400,700|Poppins:300,400|Roboto+Mono|Roboto:400,500,900|Spectral"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
          <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
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
