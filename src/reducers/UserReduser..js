import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../constants';

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