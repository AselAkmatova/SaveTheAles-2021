import { Form, Alert } from "react-bootstrap";

export default function CheckoutTime({ handleChange, errorTime }) {
  return (
    <>
      <Form.Group className="mb-3 col-12">
        <Form.Label>
          День и время доставки <br />
        </Form.Label>
        <br />
        <Form.Control
          required
          onChange={handleChange}
          type="datetime-local"
          name="date"
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
        <small>Заказы принимаются с 17:00 до 22:00</small>
        <Form.Control.Feedback type="invalid">
          <p className="feedback-alert">Пожалуйста, заполните, поле</p>
        </Form.Control.Feedback>
        {errorTime && (
          <Alert className="mt-3" variant="danger">
            Выбрано нерабочее время бара
          </Alert>
        )}
      </Form.Group>
    </>
  );
}
