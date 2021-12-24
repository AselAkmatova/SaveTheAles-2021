import { useState } from "react";
import { Form, Alert } from "react-bootstrap";

export default function Feedback() {
  let [validated, setValidated] = useState(false);
  let [form, setForm] = useState({});
  let [messageAccepted, setMessageAccepted] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm(() => {
      return { ...form, [name]: value };
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
      setMessageAccepted(true);
    }
  };
  return (
    <>
      <div className="feedback">
        <Alert show={messageAccepted} className="mt-3 col-7 feedback-success">
          Благодарим Вас за отзыв
        </Alert>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          hidden={messageAccepted}
        >
          <h4 className="feedback__title">
            Мы будем рады получить Ваш отзыв о нашем баре
          </h4>

          <Form.Group md="7">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              type="tel"
              name="tel"
              onChange={handleChange}
              placeholder="Введите номер телефона : 000-000-000"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              required
            />
            <small>Формат: 0550-000-000</small>
            <Form.Control.Feedback type="invalid">
              <p className="feedback-alert">Пожалуйста, заполните, поле</p>
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="7" className="mt-3">
            <Form.Label>Ваше сообщение</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="feedbackMessage"
              onChange={handleChange}
              rows={5}
              className="mb-3"
              placeholder="Место для Вашего отзыва"
            />
            <Form.Control.Feedback type="invalid">
              <p className="feedback-alert">Пожалуйста, заполните, поле</p>
            </Form.Control.Feedback>
          </Form.Group>

          <button className="mt-3 feedback__btn" type="submit">
            Отправить
          </button>
        </Form>
      </div>
    </>
  );
}
