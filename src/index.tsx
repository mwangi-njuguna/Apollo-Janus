import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.sass';
import App from './Components/App';

// Apollo client configs imports
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const rootNode = document.getElementById('root');

//TODO: change the uri incase you want to run on a prod environment
const httpLink = createHttpLink({
  uri: 'http:localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootNode
);
