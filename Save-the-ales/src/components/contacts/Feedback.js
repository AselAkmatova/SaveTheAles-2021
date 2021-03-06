import { useState } from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";

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
      emailjs.sendForm(
        "my_gmail",
        "savetheales",
        form2,
        "user_TsyEUcib7ZtF7XCD50DJ2"
      );
    }
  };
  return (
    <>
      {messageAccepted && (
        <h4 className="feedback-success">Благодарим Вас за отзыв</h4>
      )}
      <Form
        className="feedback"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        hidden={messageAccepted}
      >
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
    </>
  );
}
