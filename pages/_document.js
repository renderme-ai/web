// /pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Wave from '../components/Wave';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,700,800"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Wave></Wave>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
