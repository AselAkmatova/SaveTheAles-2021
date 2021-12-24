import { LOG_OUT, SIGN_IN, SIGN_UP, SIGN_IN_ERROR } from '../actions/types';

const initialState = {
  user: [],
  loggedIn: false,
  signedUp: false,
  loggedInError: false,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signedUp: true,
      };

    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loggedInError: false,
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        loggedInError: true,
      };

    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        loggedInError: false,
      };

    default:
      return state;
  }
}
