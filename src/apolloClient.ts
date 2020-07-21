import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GRAPHQL_API_ENDPOINT } from './config/Graphql';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: GRAPHQL_API_ENDPOINT,
  request: (operation) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const isTokenPresent = !!token;
    console.log(' token is ', token);
    operation.setContext({
      headers: isTokenPresent
        ? {
            Authorization:  `Bearer ${token}`,
          }
        : {},
    });
  },
});

export default client;
