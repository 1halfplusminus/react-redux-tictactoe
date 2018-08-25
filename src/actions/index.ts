import { IncrementAction } from "../types";

export enum ActionType {
    IncrementCounter = "IncrementCounter",
    DecrementCounter = "DecrementCounter",
    AddTodo = "AddTodo",
}

export function increateCounter(value: number): IncrementAction {
    return {
        increment: value,
        type: ActionType.IncrementCounter,
    };
}
