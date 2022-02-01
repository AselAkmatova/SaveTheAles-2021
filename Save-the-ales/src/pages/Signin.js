import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { BagPlus, PersonSquare } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSignin } from "../actions/user";

export default function Signin() {
  let [validated, setValidated] = useState(false);
  let [form, setForm] = useState({});
  let { loggedIn, loggedInError } = useSelector((state) => state.user);
  let user = useSelector((state) => state.user.user);

  let dispatch = useDispatch();

  const handleChange = (e) => {
    setForm(() => {
      return { ...form, [e.target.name]: e.target.value };
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

    dispatch(fetchSignin(form));
  };

  return (
    <main className="signin ">
      {loggedIn ? (
        <div className="signin-success">
          <h2>
            Вы успешно авторизовались как <b>{user.data.username}</b>
          </h2>
          <div>
            <PersonSquare size={22} color="white" />{" "}
            <Link to={`/profile`}>Перейти в профиль</Link>
          </div>
          <div>
            <BagPlus size={25} color="white" />
            <Link to={`/dishes`}>Cделать заказ</Link>{" "}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="signin__title">Авторизация</h2>
          <Form
            className="signin__form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {loggedInError && (
              <Alert variant="danger col-xs-11	col-sm-6	col-md-6	col-lg-4">
                Неверный пароль или логин
              </Alert>
            )}
            <Form.Group className="mb-3 col-xs-11	col-sm-6	col-md-6	col-lg-4">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={handleChange}
                name="username"
                placeholder="Введите username"
                className="mb-3"
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
            <button type="submit" className="signin__btn">
              Войти
            </button>
            <span>или </span>
            <Link className="signin__btn" to={`/signup`}>
              Зарегистрироваться
            </Link>
          </Form>
        </div>
      )}
    </main>
  );
}
