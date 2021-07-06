import '../public/css/main.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
    <title>A7s Dev - Construindo o futuro</title>
        <meta name="description" content="Generated by create next app" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
      </Head>    
    <Component {...pageProps} />
  </>
)

export default App