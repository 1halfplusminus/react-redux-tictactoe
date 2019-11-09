import { List, Map, Record } from 'immutable';
import { AnyAction } from 'redux';
import { ActionType } from './actions/index';

export type Player = 'X' | 'O';
export type Reducer<T> = (state: T, action: Action) => T;

export interface MakeMoveAction extends AnyAction {
  type: ActionType.MakeMove;
  index: number;
  player: Player;
}
export interface RestartAction extends AnyAction {
  type: ActionType.RestartAction;
}

export type Action = MakeMoveAction | RestartAction;

export interface IAppState {
  squares: List<string>;
  player: Player;
  winner: Player | 'equality' | null;
  moves: List<Pick<MakeMoveAction, 'index' | 'player'>>;
  playerCount: Map<Player, { win: number; lose: number }>;
}
const defaultPlayerCount = Map<Player, { win: number; lose: number }>()
  .set('X', { win: 0, lose: 0 })
  .set('O', { win: 0, lose: 0 });

export class AppState
  extends Record({
    squares: List<string>(Array(9).fill(null)),
    player: 'X',
    winner: null,
    moves: List([]),
    playerCount: defaultPlayerCount,
  })
  implements IAppState {
  public player: Player;
  public squares: List<string>;
  public winner: Player | null;
  constructor(config: Partial<IAppState> = null) {
    super(config);
  }
}
