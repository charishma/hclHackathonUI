
import {all} from 'redux-saga/effects';
import appReducers from './reducers';
import rootAppSaga from './saga';
import * as actions from './actions';

export const rootReducers = {
    appReducers
};

export function* rootSaga() {
    yield all([
        rootAppSaga()
    ]);
}
export const appActions = {
    ...actions,
};
