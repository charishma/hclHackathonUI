import { createAction } from 'redux-actions';


const PREFIX = 'HACKATHON';

/**
 * Login click 
 */
export const login = createAction(`${PREFIX}/LOGIN`);

export const logout = createAction(`${PREFIX}/LOGOUT`);

export const invalidCredentials = createAction(`${PREFIX}/INVALID_DATA`);

