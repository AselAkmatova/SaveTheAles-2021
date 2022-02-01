import { SET_CONTACTS } from "./types";

export const fetchContacts = () => (dispatch) => {
  fetch("https://save-the-ales.herokuapp.com/contacts")
    .then((r) => r.json())
    .then((data) => {
      dispatch({
        type: SET_CONTACTS,
        payload: data,
      });
    });
};
