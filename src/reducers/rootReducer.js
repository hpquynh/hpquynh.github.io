import { combineReducers } from 'redux';

function testReducer(state = {}, action) {
    return state;
}

export const reducers = {
    test: testReducer,
};

export default combineReducers(reducers);