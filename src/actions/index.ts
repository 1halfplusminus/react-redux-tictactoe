import { MakeMoveAction, Player, RestartAction } from '../types';

export enum ActionType {
  MakeMove = 'MakeMove',
  RestartAction = 'RestartAction',
}

export function makeAMove(index: number, player: Player): MakeMoveAction {
  return {
    index,
    player,
    type: ActionType.MakeMove,
  };
}
export function restart(): RestartAction {
  return {
    type: ActionType.RestartAction,
  };
}
