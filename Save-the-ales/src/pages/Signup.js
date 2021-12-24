import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "../actions/user";

export default function Signup() {
  let [validated, setValidated] = useState(false);
  let [form, setForm] = useState({});
  let dispatch = useDispatch();
  let { signedUp } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setForm(() => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form2 = event.currentTarget;

    if (form2.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form2.checkValidity()) {
      dispatch(fetchSignUp(form));
    }
  };

  return (
    <div className="signup">
      <h2 className="signup__title">Регистрация</h2>

      {signedUp ? (
        <h2>Вы успешно зарегистрировались</h2>
      ) : (
        <Form
          className="signup__form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3 col-xs-11	col-sm-6	col-md-6	col-lg-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="Введите логин"
            />
            <Form.Control.Feedback type="invalid">
              <p className="feedback-alert">Пожалуйста, заполните, поле</p>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 col-xs-11	col-sm-6	col-md-6	col-lg-4">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Введите пароль"
              required
              className="mb-3 "
            />
            <Form.Control.Feedback type="invalid">
              <p className="feedback-alert">Пожалуйста, заполните, поле</p>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 col-xs-11	col-sm-6	col-md-6	col-lg-4">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="firstName"
              placeholder="Введите имя"
            />
            <Form.Control.Feedback type="invalid">
              <p className="feedback-alert">Пожалуйста, заполните, поле</p>
            </Form.Control.Feedback>
          </Form.Group>

          <button type="submit" className="signup__btn">
            Войти
          </button>
        </Form>
      )}
    </div>
  );
}
