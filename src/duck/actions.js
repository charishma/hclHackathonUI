import { createAction } from 'redux-actions';
import cuid from 'cuid';


const PREFIX = 'HACKATHON';

/**
 * Login click 
 */
export const login = createAction(`${PREFIX}/LOGIN`);

export const logout = createAction(`${PREFIX}/LOGOUT`);

export const invalidCredentials = createAction(`${PREFIX}/INVALID_DATA`);

export const submitApplication = createAction(`${PREFIX}/SUBMIT`, payload => {
    const applicationId = cuid();
    const applicationData = {};
    applicationData[applicationId]={ 
        id: applicationId,
        status:'Submitted',
        ...payload
        
        };
     
return {
    applicationData,
    applicationId
}
});