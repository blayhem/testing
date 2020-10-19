import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="Description" content="SigmaRail cat counter, upload a URL and get the number of cats in the image (mock)."></meta>
          <title>SigmaRail Cat Counter</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
          />
        </Head>
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
