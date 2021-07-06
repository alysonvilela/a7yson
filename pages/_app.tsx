import '../public/css/main.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SeoHeader } from '../components/SeoTags'
import { ExtScripts } from '../components/ExternalScripts'


const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <SeoHeader />
    </Head>    
    <Component {...pageProps} />
      <ExtScripts/>
  </>
)

export default App