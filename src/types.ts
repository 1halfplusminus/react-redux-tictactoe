import { List, Record } from 'immutable';
import { AnyAction } from 'redux';
import { ActionType } from './actions/index';

export type Player = 'X' | 'O';
export type Reducer<T> = (state: T, action: Action) => T;

export interface MakeMoveAction extends AnyAction {
  type: ActionType.MakeMove;
  index: number;
  player: Player;
}

export type Action = MakeMoveAction;

export interface IAppState {
  squares: List<string>;
  player: Player;
  winner: Player | null;
}

export class AppState
  extends Record({
    squares: List<string>(Array(9).fill(null)),
    player: 'X',
    winner: null,
  })
  implements IAppState {
  public player: Player;
  public squares: List<string>;
  public winner: Player | null;
  constructor(config: Partial<IAppState> = null) {
    super(config);
  }
}
