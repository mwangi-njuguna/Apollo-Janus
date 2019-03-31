import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.sass';
import App from './Components/App';

// Apollo client configs imports
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const rootNode = document.getElementById('root');

//TODO: change the uri incase you want to run on a prod environment
// The uri points to graphql server instance uri
const serverLink = createHttpLink({
  uri: 'http:localhost:4000'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: serverLink,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootNode
);
