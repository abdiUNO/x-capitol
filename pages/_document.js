import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />

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
