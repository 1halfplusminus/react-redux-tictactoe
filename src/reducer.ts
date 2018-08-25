import {List} from "immutable";
import {ActionType} from "./actions";
import {Action, AppState, IAppState, Reducer} from "./types";

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
};

export const tictactoe: Reducer<IAppState> = (state: AppState  = new AppState(), action: Action) => {
    switch (action.type) {
        case ActionType.MakeMove:
            if (!state.squares.get(action.index) && !state.winner) {
                const nextSquare = state.squares.set(action.index, action.player);
                return state
                .set("player", (action.player === "X") ? "O" : "X")
                .set("squares", nextSquare)
                .set("winner", calculateWinner(nextSquare.toArray()));
            }
        default:
    }
    return state;
};
