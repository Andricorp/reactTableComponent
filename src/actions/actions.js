// import axios from 'axios';

// import { AUTHENTICATED, AUTHENTICATION_ERROR } from '../constants';



// const actionPending = () => ({ type: 'SET_TABLE', status: 'PENDING', payload: null, error: null })
// const actionResolved = payload => ({ type: 'SET_TABLE', status: 'RESOLVED', payload, error: null })
// const actionRejected = error => ({ type: 'SET_TABLE', status: 'REJECTED', payload: null, error })


export const setTable = (input) => async (dispatch ) => {
    dispatch(actionPending())
    try {
        dispatch(actionResolved(await axios.get(`http://api.tvmaze.com/search/shows?q=${input}`).then(res => res.data)))
    }
    catch (error) {
        dispatch(actionRejected(error))
    }
}



const URL = 'http://www.sample-website.com';

export function signInAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/signin`, { email, password });

      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}
