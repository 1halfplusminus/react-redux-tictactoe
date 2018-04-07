import 'jest';
import {Action, AppState, IAppState, Todo} from './types';
import { todo , counter} from './reducer';
import {ActionType} from './actions';
import {combineReducers, createStore} from 'redux';
import {List, Map} from 'immutable';
import {createSelector} from 'reselect';

const todoSelector: (state: IAppState) => List<Todo> = state => state.todo;
const todoByIdSelector = createSelector(
    todoSelector,
    todo => todo.reduce((acc, todo) => acc.set(todo.id, todo) , Map())
);
test('test', () => {
    let rootReducer : (state: AppState, action: Action) => AppState = combineReducers({todo , counter});
    let store = createStore(rootReducer, new AppState({}).toObject());
    let state = store.getState();
    store.dispatch({decrement: 10 ,type: ActionType.DecrementCounter});
    let state2 = store.getState();
    store.dispatch({ type: ActionType.AddTodo, todo: new Todo({ id: 'test', action: 'make some shopping'})});
    let state3: IAppState = store.getState();
    console.log(todoByIdSelector(state3));
    expect(state.counter).toEqual(0);
    expect(state2.counter).toEqual(-10);
    expect(state3.todo.size).toEqual(1);
});