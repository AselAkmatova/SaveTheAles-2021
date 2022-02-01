import { SET_CONTACTS } from "../actions/types";

const initialState = {
  contacts: [],
  loading: true,
};
export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
