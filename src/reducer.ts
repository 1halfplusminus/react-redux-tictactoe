import {Action, Reducer, Todo} from './types';
import {ActionType} from './actions';
import {List, Map} from 'immutable';

export const todo: Reducer<List<Todo>> = (state : List<Todo>  = List(), action : Action) => {
    switch (action.type) {
        case ActionType.AddTodo:
            return state.push(action.todo);
    }
    return state;
};
export const counter: Reducer<number> = (state : number  = 0, action : Action) => {
    switch (action.type) {
        case ActionType.IncrementCounter:
            return state + action.increment;
        case ActionType.DecrementCounter:
            return state - action.decrement;
    }
    return state;
};