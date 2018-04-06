import {Action, AppState } from './types';
import {ActionType} from './actions';

export const counter: (action : Action, state : AppState) => AppState = (action : Action, state : AppState) => {
    switch (action.type) {
        case ActionType.IncrementCounter:
            return state.set('counter', state.counter + action.increment);
        case ActionType.DecrementCounter:
            return state.set('counter', state.counter - action.decrement);
    }
    return state;
};