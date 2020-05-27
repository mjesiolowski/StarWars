import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ContainerElement, GlobalStyleElement } from './styles';
import configureStore from './store/configureStore';
import { addStarship, updateStarship } from './actions';
import { App } from './components';

const store = configureStore();
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addStarship({ name: 'test', count: 10, unitPrice: 1000 }));
store.dispatch(addStarship({ name: 'test2', count: 6, unitPrice: 2000 }));

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
        <h1>Star Wars</h1>
        <App />
      </ContainerElement>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(jsx, document.getElementById('app'));
