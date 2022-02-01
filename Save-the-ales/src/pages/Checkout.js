import { useState } from "react";
import CheckoutSuccess from "../components/checkout/CheckoutSuccess";
import { Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutTime from "../components/checkout/CheckoutTime";
import CheckoutTop from "../components/checkout/CheckoutTop";
import { fetchCheckout } from "../actions/checkout";

export default function Checkout() {
  const [validated, setValidated] = useState(false);
  let [orderAccepted, setOrderAccepted] = useState(false);
  let [form, setForm] = useState({});
  let dishes = useSelector((state) => state.cart.dishes);
  let token = useSelector((state) => state.user.user.token);
  const [errorTime, setErrorTime] = useState(false);
  let dishesPrice = dishes.reduce((acc, dish) => {
    return acc + dish.quantity * dish.price;
  }, 0);
  let totalPrice = dishesPrice + 200;

  let dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm(() => {
      return {
        ...form,
        token: token,
        dishes: dishes
          .map((dish) => [dish.name, dish.quantity])
          .join("; ")
          .replace(/,/gi, "*"),
        [name]: value,
      };
    });
    if (form.date) {
      form.date.split("T")[1].split(":")[0] < 17 ||
      form.date.split("T")[1].split(":")[0] > 22
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
    if (form2.checkValidity() && !errorTime) {
      setOrderAccepted(true);
      dispatch(fetchCheckout(form));
    }
  };

  return (
    <main className="checkout ">
      {!orderAccepted && <CheckoutTop />}
      {orderAccepted && <CheckoutSuccess form={form} />}
      {!orderAccepted && (
        <Form
          className="cheackout__form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="checkout-form-top">
            <div>
              <Form.Group className="mb-3 col-12">
                <Form.Label>Ваше имя</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={handleChange}
                  name="clientName"
                />
                <Form.Control.Feedback type="invalid">
                  <p className="feedback-alert">Пожалуйста, заполните, поле</p>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 col-12">
                <Form.Label>Адрес доставки</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  type="text"
                  name="clientAddress"
                />
                <Form.Control.Feedback type="invalid">
                  <p className="feedback-alert">Пожалуйста, заполните, поле</p>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 col-12">
                <Form.Label>Номер телефона</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  name="clientTel"
                  onChange={handleChange}
                  pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                />
                <small>Формат: 0550-000-000</small>
                <Form.Control.Feedback type="invalid">
                  <p className="feedback-alert">Пожалуйста, заполните, поле</p>
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div>
              <CheckoutTime handleChange={handleChange} errorTime={errorTime} />
              <Form.Group className="mb-3 col-12">
                <Form.Label>Комментарии к заказу</Form.Label>
                <Form.Control
                  as="textarea"
                  name="additionalInfo"
                  onChange={handleChange}
                  rows={4}
                  placeholder="Доп информацию : домофон, подъезд и тд "
                />
              </Form.Group>
            </div>
          </div>
          <div className="checkout-form-bottom">
            <div>
              <p> Сумма блюд: {dishesPrice} сом</p>
              <p>Доставка: 200 сом</p>
              <p> Общая сумма заказа : {totalPrice} сом</p>
            </div>

            <Form.Group className="mb-3 col-12">
              <Form.Label>Сдачи с </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Введите сумму"
                onChange={handleChange}
                name="changeAmount"
              />
              {form.changeAmount < totalPrice && (
                <Alert className="mt-3" variant="danger">
                  Сумма заказа превышает указанную Вами сумму
                </Alert>
              )}
              <Form.Control.Feedback type="invalid">
                <p className="feedback-alert">Пожалуйста, заполните, поле</p>
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Form.Group className="mb-3 mt-3 checkout-form-checkbox">
            <Form.Check
              required
              label="Я согласен/согласна предоставить личные данные (Они будут использованы только для оформления 
заказа)"
              feedback="Необходимо Ваше согласие перед подтверждением"
            />
          </Form.Group>
          <button className="checkout-btn" type="submit">
            Подтвердить
          </button>
        </Form>
      )}
    </main>
  );
}
