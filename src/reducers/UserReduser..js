// export default function(state = {
//     posts: null
// }, action){
//     switch(action.type){
//         case 'SET_USER': 
//             return {...state, user: action.payload|| false};
//         case 'GET_USER': //
//     // console.log(state.posts)
//     // console.log(action.payload)
//             return {...state, user: action.payload|| false};
            
//         default:
//             return state;
//     }
// }

import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/actions';

export default function(state={}, action) {
  switch(action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}