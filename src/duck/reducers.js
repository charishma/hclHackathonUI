import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {login,logout,invalidCredentials} from './actions';
import { successActionType, failedActionType } from './saga';

const loggedInStatus = handleActions({
    [successActionType(login)]:(state, { payload }) => {
        return !state;
    },
    [logout]:(state, { payload }) => {
        return !state;
    },
},false);

const logInError =  handleActions({
    [failedActionType(login)]:(state, { payload,error }) => {
        return error.msg;
    },
    [invalidCredentials]:(state,{payload}) => {
        return payload.msg;
    }
},null);
 const appReducers = combineReducers({
    loggedInStatus,
    logInError
});

export default appReducers;