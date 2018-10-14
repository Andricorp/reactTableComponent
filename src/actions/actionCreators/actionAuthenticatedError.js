import {authStatus} from '../../constants'
export const actionAuthenticatedError = error => ({ type: authStatus.AUTHENTICATION_ERROR, payload: error })
