import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_HOST || '';
const token = process.env.GRAPHQL_TOKEN;

export const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
  // link: new HttpLink({
  //   uri: endpoint!,
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }),
  ssrMode: typeof window === 'undefined',
});
