import {select, call, put, takeLatest, } from 'redux-saga/effects';
import * as selectors  from './selectors';
import { push as pushRoute, goBack } from 'connected-react-router';
import {PageRoutes} from '../Constants/constants';
import {find,propEq,findIndex,all} from 'ramda';
import cuid from 'cuid';
import {userData} from '../MockData/mock-data-login.js';
export function beginAction(originalAction, payload) {
    const action = {...originalAction, type: beginActionType(originalAction.type)};
    if (payload) {
        action.payload = payload;
    }
   
    return action;
}
export function beginActionType(actionType) {
    return `${String(actionType)}_BEGIN`;
}
export function successAction(originalAction, payload) {
    const action = {...originalAction, type: successActionType(originalAction.type)};
    if (payload) {
        action.payload = payload;
    }
    
    return action;
}

export function failedAction(originalAction, error) {
    const action = {...originalAction, payload: null, type: failedActionType(originalAction.type)};
    action.error = error;
    if (error) {
        action.payload = originalAction.payload;
    }
    return action;
}
export function successActionType(actionType) {
    return `${String(actionType)}_SUCCESS`;
}
export function failedActionType(actionType) {
    return `${String(actionType)}_FAILED`;
}

function* userLogin(action)
{
   const {username,password} = action.payload;
   const user_data = userData.data;
    if(user_data.username === username && user_data.password === password)
    {
        yield put(successAction(action,true));
        yield put(pushRoute({
            pathname: PageRoutes.Apply,
        }));
    }else{
        yield put(failedAction(action,{'msg':'Please enter valid credentials'}));
    }

}
export default function* rootAppSaga() {
    yield takeLatest('HACKATHON/LOGIN', userLogin);
}
