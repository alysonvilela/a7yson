import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { Footer } from '../components/Footer';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  renderPage() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
