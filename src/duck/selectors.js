import { path } from 'ramda';

const getState = path(['appReducers']);

/** get LogIn Status */
export const getLoggedInStatus = state => getState(state).loggedInStatus;

/** get Error Msg In Login Page */
export const getLogInErrorMsg = state => getState(state).logInError;

/** get Student College Data */
export const getStudentCollegeData = state => getState(state).collegeData;

export const getSubmittedApplications = state => {
    const submittedApplications = getState(state).submittedApplications;
    return Object.values(submittedApplications || []);
};