import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/main.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SeoHeader } from '../components/SeoTags';
import { ExtScripts } from '../components/ExternalScripts';
import { NavBar } from '../components/Nav';
import { Footer } from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <SeoHeader />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    <ExtScripts />
  </>
);

export default App;
