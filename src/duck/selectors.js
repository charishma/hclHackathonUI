import { path } from 'ramda';

const getState = path(['appReducers']);


export const getLoggedInStatus = state => getState(state).loggedInStatus;

export const getLogInErrorMsg = state => getState(state).logInError;
