import { ActionType } from "../actions";
import * as actions from "./index";
​
describe("actions", () => {
  it("should create an action to increment the counter", () => {
    const increment = 1;
    const expectedAction = {
      increment,
      type: ActionType.IncrementCounter,
    };
    expect(actions.increateCounter(increment)).toEqual(expectedAction);
  });
});
