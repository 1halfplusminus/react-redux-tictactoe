import {List, Record} from "immutable";
import {Action, AnyAction} from "redux";
import {ActionType} from "./actions/index";

export type Reducer<T> = (state: T, action: Action) => T;

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
    todo: ITodo;
}

export type Action = IncrementAction | DecrementAction | AddTodoAction;

export interface ITodo {
    id: string;
    action: string;
}
export class Todo extends Record({id: "", action: ""}) implements ITodo {
    public id: string;
    public action: string;
}
export interface IAppState {
    counter: number;
    todo: List<ITodo>;
}
// tslint:disable-next-line:max-classes-per-file
export class AppState extends Record({counter: 0, todo: List<ITodo>()}) implements IAppState {
    public counter: number;
    public todo: List<ITodo>;
    constructor(config: Partial<IAppState>) {
        super(config);
    }
}
