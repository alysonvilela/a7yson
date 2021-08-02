import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/main.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ExtScripts } from '../components/ExternalScripts';
import { NavBar } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SeoTags } from '../components/SeoTags';


const initialDesc = "https://www.instagram.com/a7yson https://twitch.tv/a7yson https://www.linkedin.com/in/alysonvilela"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Alyson Vilela | Front-end Developer | UX/UI</title> 
    </Head>      
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    <ExtScripts />
  </>
);

export default App;
