import axios from 'axios';
import {actionAuth} from '../actionCreators'

// import { AUTHENTICATED, AUTHENTICATION_ERROR } from '../constants';
// import {authStatus} from '../../constants'
import {URL} from '../../constants'

export function signInAction({ email, password }, history) {
  return async (dispatch) => {
    try { 
      const res = await axios.post(`${URL.auth}/signin`, { email, password }).then(res=>console.log(res.status, 'hcfjcgjfcjgcgjcgfxfxfxgfcgfxgfcg'));
// console.log(res)
      dispatch(actionAuth.actionAuthenticated()
        // { type: authStatus.AUTHENTICATED }
        );
      // localStorage.setItem('user', res.data.token); 
      localStorage.setItem('user', res.token); 
      history.push('/details');
    } catch(error) {
      dispatch(actionAuth.actionAuthenticatedError('Invalid email or password'));
        // {
        // type: authStatus.AUTHENTICATION_ERROR,
        // payload: 'Invalid email or password'
      // }
      // );
    }
  };
}