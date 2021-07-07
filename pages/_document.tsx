import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { Footer } from '../components/Footer';
import { SeoHeader } from '../components/SeoTags';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  
  renderPage() {
    document.title = 'My new title here';
    return (
      <Html>
        <Head>
          <SeoHeader />
        </Head>
        <body>
          <Main />
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
