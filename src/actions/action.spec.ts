import { ActionType } from "../actions";
import { MakeMoveAction } from "../types";
import * as actions from "./index";
​
describe("actions", () => {
  it("should create an action make a move", () => {
    const index = 1;
    const expectedAction: MakeMoveAction = {
      index,
      player: "X",
      type: ActionType.MakeMove,
    };
    expect(actions.makeAMove(index, "X")).toEqual(expectedAction);
  });
});
