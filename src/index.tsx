import React = require("react");
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "reactive-elements";
import { createStore } from "redux";

import { ConnectedGame } from "./connected/GameConnected";
import "./index.scss";
import { tictactoe } from "./reducer";

const store = createStore(tictactoe);

export function createTictactoe(query: string) {
  for (const domContainer of document.querySelectorAll(query)) {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedGame />
      </Provider>,
      domContainer,
    );
  }
}
// @ts-ignore
document.registerReact("x-tictactoe",
() => (
  <Provider store={store}>
    <ConnectedGame />
  </Provider>
));
module.exports = createTictactoe;
