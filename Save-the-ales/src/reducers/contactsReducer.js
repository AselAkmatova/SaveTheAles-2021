import {
  SET_CONTACTS,
  CONTACTS_FETCH_END,
  CONTACTS_FETCH_START,
} from "../actions/types";

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

    case CONTACTS_FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case CONTACTS_FETCH_END:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
