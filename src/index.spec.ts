import 'jest';
import {AppState} from './types';
import {counter} from './reducer';
import {ActionType} from './actions';

test('test', () => {
    let state = new AppState({});
    let state2 = counter({type: ActionType.DecrementCounter, decrement: 10}, state);
    expect(state.counter).toEqual(0);
    expect(state2.counter).toEqual(-10);
});