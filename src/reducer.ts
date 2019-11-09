import { List } from 'immutable';
import { ActionType } from './actions';
import { Action, AppState, IAppState, Reducer } from './types';

function calculateWinner(squares: string[]) {
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
}

export const tictactoe: Reducer<IAppState> = (
  state: AppState = new AppState(),
  action: Action,
) => {
  switch (action.type) {
    case ActionType.RestartAction:
      return state
        .set('squares', List<string>(Array(9).fill(null)))
        .set('player', 'X')
        .set('winner', null)
        .set('moves', List([]));
    case ActionType.MakeMove:
      if (!state.squares.get(action.index) && !state.winner) {
        const nextSquare = state.squares.set(action.index, action.player);
        const moves = state.moves.push({
          index: action.index,
          player: action.player,
        });
        const winner = calculateWinner(nextSquare.toArray());
        const getLoser = () => {
          return winner === 'X' ? 'O' : 'X';
        };
        const getWinner = () => {
          return winner === 'X' ? 'X' : 'O';
        };
        const getPlayerCount = () => {
          return winner
            ? state
                .get('playerCount')
                .update(getWinner(), ({ lose, win }) => ({
                  win: ++win,
                  lose,
                }))
                .update(getLoser(), ({ lose, win }) => ({
                  win,
                  lose: ++lose,
                }))
            : state.get('playerCount');
        };

        return state
          .set('player', action.player === 'X' ? 'O' : 'X')
          .set('squares', nextSquare)
          .set('winner', moves.count() === 9 && !winner ? 'equality' : winner)
          .set('moves', moves)
          .set('playerCount', getPlayerCount());
      }
    default:
  }
  return state;
};
