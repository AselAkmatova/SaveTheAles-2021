export default function CheckoutSuccess({ form }) {
  return (
    <>
      <div className="checkout-success">
        <h2>Ваш заказ принят. Мы свяжется с Вами в ближайшее время</h2>
        <p>День доставки: {form.date.replace("T", " в ")}</p>
        <p>Имя: {form.clientName}</p>
        <p>Адрес: {form.clientAddress} </p>
        <p>Тел: {form.clientTel} </p>
        <p>Доп инфо: {form.additionalInfo} </p>
        <p>Сдача с: {form.changeAmount} сом</p>
      </div>
    </>
  );
}
