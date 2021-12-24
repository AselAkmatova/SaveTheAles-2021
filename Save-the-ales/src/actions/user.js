import { SIGN_IN, LOG_OUT, SIGN_UP, SIGN_IN_ERROR } from "./types";

export const loggingOut = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
  window.location.href = "/";
  localStorage.removeItem("x_token");
};

export const fetchSignin = (form) => (dispatch) => {
  fetch("http://localhost:1717/signin", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.token) {
        dispatch({
          type: SIGN_IN,
          payload: data,
        });
      } else {
        dispatch({
          type: SIGN_IN_ERROR,
        });
      }
    });
};

export const fetchSignUp = (form) => (dispatch) => {
  fetch("http://localhost:1717/signup", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  })
    .then((r) => r.json())
    .then((data) => {
      localStorage.setItem("x_token", data.token);
      dispatch({ type: SIGN_UP });
      window.location.href = "/signin";
    });
};
