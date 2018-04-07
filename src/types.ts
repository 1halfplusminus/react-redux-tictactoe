import {Record, List} from 'immutable';
import {ActionType} from './actions';
import {Action, AnyAction} from 'redux';


export type Reducer<T> = ( state: T, action: Action) => T;

export interface IncrementAction  extends AnyAction  {
    type: ActionType.IncrementCounter;
    increment: number;
}
export interface DecrementAction  extends AnyAction  {
    type: ActionType.DecrementCounter;
    decrement: number;
}
export interface AddTodoAction extends AnyAction {
    type: ActionType.AddTodo;
    todo: Todo;
}
export type Action = IncrementAction | DecrementAction | AddTodoAction;

export interface ITodo {
    id: string;
    action: string;
}
export class Todo extends Record({id: '', action: ''}) implements ITodo {
    id: string;
    action: string;
}
export interface IAppState {
    counter: number;
    todo: List<Todo>
}
export class AppState extends Record({counter: 0, todo: List<Todo>()}) implements IAppState {
    counter: number;
    todo: List<Todo>;
    constructor(config: Partial<IAppState>){
        super(config);
    }
}
