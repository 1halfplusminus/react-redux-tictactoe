import React = require("react");
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { ConnectedGame } from "./connected/GameConnected";
import "./index.scss";
import { tictactoe } from "./reducer";

const store = createStore(tictactoe);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedGame />
    </Provider>
   ,
    document.getElementById("app"),
);
