import { Form, Alert } from "react-bootstrap";

export default function BookTableTime({ handleChange, errorTime }) {
  return (
    <>
      <Form.Group>
        <Form.Label>Дата и время</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          type="datetime-local"
          name="bookDate"
          min={`${new Date().getFullYear()}-${
            new Date().getMonth() + 1 < 10
              ? "0" + (new Date().getMonth() + 1)
              : new Date().getMonth() + 1
          }-${
            new Date().getDate() < 10
              ? "0" + new Date().getDate()
              : new Date().getDate()
          }T17:00`}
        />
        <small>Брони принимаем с 17:00 до 22:30</small>
        {errorTime && (
          <Alert className="mt-3" variant="danger">
            Нерабочее время
          </Alert>
        )}
      </Form.Group>
    </>
  );
}
