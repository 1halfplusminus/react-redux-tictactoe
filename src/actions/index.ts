import { MakeMoveAction, Player } from "../types";

export enum ActionType {
    MakeMove = "MakeMove",
}

export function makeAMove(index: number, player: Player): MakeMoveAction {
    return {
        index,
        player,
        type: ActionType.MakeMove,
    };
}
