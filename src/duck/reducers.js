import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {login,logout,invalidCredentials,submitApplication} from './actions';
import { successActionType, failedActionType } from './saga';
import {CollegeData} from '../Constants/constants';

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
const collegeData = handleActions({

},CollegeData);
const submittedApplications = handleActions({
    [submitApplication]:(state,{payload}) => {
        return {
            ...state,
            ...payload.applicationData,
        };
    }

},{});
 const appReducers = combineReducers({
    loggedInStatus,
    logInError,
    collegeData,
    submittedApplications
});

export default appReducers;