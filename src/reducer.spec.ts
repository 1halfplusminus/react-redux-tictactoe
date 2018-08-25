/*
import "jest";

import { List } from "immutable";
import {combineReducers, createStore} from "redux";
import {ActionType} from "./actions";
import {Action, AppState} from "./types";

describe("reducer", () => {
    it("should increment the counter", () => {
        const action: IncrementAction = {increment: 10 , type: ActionType.IncrementCounter};
        expect(
            counter(0, action),
        ).toEqual(
            10,
        );
    });
    it("should decrement the counter", () => {
        const action: DecrementAction = {decrement: 10 , type: ActionType.DecrementCounter};
        expect(
            counter(0, action),
        ).toEqual(
            -10,
        );
    });
    it("should add a todo", () => {
        const action: AddTodoAction = {
            todo: {
                action: "make some shopping",
                id: "test",
            },
            type: ActionType.AddTodo,
        };
        expect(
            todo(List([]), action),
        ).toEqual(
            List([{
                action: "make some shopping",
                id: "test",
            }]),
        );
    });
});
 */
