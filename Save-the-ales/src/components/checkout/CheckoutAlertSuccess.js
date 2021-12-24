import { Alert } from "react-bootstrap";

export default function CheckoutAlertSuccess({ form, orderAccepted }) {
  return (
    <>
      <Alert show={orderAccepted} className="mt-2 col-6 checkout-success">
        <h4>Ваш заказ принят.</h4>
        <h4>Мы свяжется с Вами в ближайшее время</h4>
        <span>День доставки: {form.date.replace("T", " в ")}</span>
        <span>Имя: {form.clientName}</span>
        <span>Адрес: {form.clientAddress} </span>
        <span>Тел: {form.clientTel} </span>
        <span>Доп инфо: {form.additionalInfo} </span>
        <span>Сдача с: {form.changeAmount} сом</span>
      </Alert>
    </>
  );
}
