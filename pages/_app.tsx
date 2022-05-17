import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { client } from '../services/graphql/client';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

export default App;
