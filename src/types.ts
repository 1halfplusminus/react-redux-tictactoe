import {Record} from 'immutable';
import {ActionType} from './actions';


export interface IncrementAction {
    type: ActionType.IncrementCounter;
    increment: number;
}
export interface DecrementAction {
    type: ActionType.DecrementCounter;
    decrement: number;
}

export type Action = IncrementAction | DecrementAction;

export interface IAppState {
    counter: number;
    wow: string;
}
export class AppState extends Record({counter: 0, wow: ''}) implements IAppState {
    counter: number;
    wow: string;
    constructor(config: Partial<IAppState>){
        super(config);
    }
}
