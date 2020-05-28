import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  GlobalStyleElement,
  ContainerElement,
} from './styles';
import configureStore from './store/configureStore';
import { addStarship, updateStarship } from './actions';
import { App, Basket } from './components';

const store = configureStore();

const httpLink = createHttpLink({
  uri: 'https://swapi.apis.guru',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const jsx = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ContainerElement>
        <GlobalStyleElement />
        <Basket />
        <App />
      </ContainerElement>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(jsx, document.getElementById('app'));
