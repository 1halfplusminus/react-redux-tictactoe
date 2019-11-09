import React = require('react');
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { GlobalStyle } from './components/GlobalStyle';
import { ConnectedGame } from './connected/GameConnected';
import { tictactoe } from './reducer';

const store = createStore(tictactoe);

export function createTictactoe(query: string) {
  for (const domContainer of document.querySelectorAll(query)) {
    ReactDOM.render(
      <Provider store={store}>
        <GlobalStyle />
        <ConnectedGame />
      </Provider>,
      domContainer,
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedGame />
  </Provider>,
  document.getElementById('root'),
);
module.exports = createTictactoe;
