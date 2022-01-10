import {
  SET_CONTACTS,
  CONTACTS_FETCH_END,
  CONTACTS_FETCH_START,
} from "./types";

export const fetchContacts = () => (dispatch) => {
  dispatch({
    type: CONTACTS_FETCH_START,
  });

  fetch("https://save-the-ales.herokuapp.com/contacts")
    .then((r) => r.json())
    .then((data) => {
      dispatch({
        type: SET_CONTACTS,
        payload: data,
      });
    });

  dispatch({
    type: CONTACTS_FETCH_END,
  });
};
