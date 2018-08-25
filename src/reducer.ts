import {List} from "immutable";
import {ActionType} from "./actions";
import {Action, ITodo, Reducer} from "./types";

export const todo: Reducer<List<ITodo>> = (state: List<ITodo>  = List(), action: Action) => {
    switch (action.type) {
        case ActionType.AddTodo:
            return state.push(action.todo);
        default:
    }
    return state;
};
export const counter: Reducer<number> = (state: number  = 0, action: Action) => {
    switch (action.type) {
        case ActionType.IncrementCounter:
            return state + action.increment;
        case ActionType.DecrementCounter:
            return state - action.decrement;
        default:
    }
    return state;
};
