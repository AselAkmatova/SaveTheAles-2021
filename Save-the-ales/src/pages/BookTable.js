import { useState } from "react";
import { Form } from "react-bootstrap";
import BookTableTime from "../components/BookTableTime";

export default function BookTable() {
  let [validated, setValidated] = useState(false);
  let [tableAccepted, setTableAccepted] = useState(false);
  const [errorTime, setErrorTime] = useState(false);
  let [form, setForm] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm(() => {
      return { ...form, [name]: value };
    });

    if (form.bookDate) {
      form.bookDate.split("T")[1].split(":")[0] < 17 ||
      form.bookDate.split("T")[1].split(":")[0] > 22
        ? setErrorTime(true)
        : setErrorTime(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form2 = event.currentTarget;
    if (form2.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (validated && !errorTime) {
      setTableAccepted(true);
    }
  };

  return (
    <main className="book-table ">
      {!tableAccepted ? (
        <h2 className="book-table__title">Забронировать стол</h2>
      ) : (
        <>
          <div className="book-table-success">
            <h2>Ваша бронь принята</h2>
            <p>Количество гостей: {form.name} </p>
            <p>Тел: {form.tel} </p>
            <p> День брони: {form.bookDate.replace("T", " в ")}</p>
            <p>Доп инфо: {form.additionalInfo} </p>
          </div>
        </>
      )}
      <Form
        className="book-table__form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        hidden={tableAccepted}
      >
        <Form.Group className="mb-3">
          <Form.Label>Ваше имя</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={handleChange}
            name="name"
          />
          <Form.Control.Feedback type="invalid">
            <p className="feedback-alert">Пожалуйста, заполните, поле</p>
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Ваш номер телефона</Form.Label>
          <Form.Control
            type="tel"
            name="tel"
            onChange={handleChange}
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            required
          />
          <small>Формат: 0550-000-000</small>
          <Form.Control.Feedback type="invalid">
            <p className="feedback-alert">Пожалуйста, заполните, поле</p>
          </Form.Control.Feedback>
        </Form.Group>

        <BookTableTime errorTime={errorTime} handleChange={handleChange} />

        <Form.Group className="mb-3">
          <Form.Label>Количество гостей</Form.Label>
          <Form.Control
            required
            type="number"
            onChange={handleChange}
            name="name"
          />
          <Form.Control.Feedback type="invalid">
            <p className="feedback-alert">Пожалуйста, заполните, поле</p>
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Доп информация</Form.Label>
          <Form.Control
            as="textarea"
            name="additionalInfo"
            onChange={handleChange}
            rows={1}
          />
        </Form.Group>

        <button className="book-table__btn" type="submit">
          Забронировать
        </button>
      </Form>
    </main>
  );
}
