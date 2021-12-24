import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../actions/orders";
import beer from "../images/beer.svg";

export default function OrderHistory() {
  let dispatch = useDispatch();
  let token = useSelector((state) => state.user.user.token);
  let { orders, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders(token));
  }, []);

  return (
    <div className="history-orders">
      <h2 className="history-orders__title">История заказов</h2>
      {loading ? (
        <img
          className="history-orders__loading loading"
          src={beer}
          alt="beer icon"
        ></img>
      ) : orders.length > 0 ? (
        <div className="history-orders__history-orders-list history-orders-list">
          {orders.map((order) => (
            <div className="history-orders-list__history-order history-order">
              <div className="history-order__dishes">
                <h5>Блюда:</h5>
                <p> {order.dishes} </p>
              </div>
              <div className="history-order__date">
                <h5>Дата заказа:</h5>
                <p>{order.date.replace("T", " в ")}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>На данный момент заказов не было</h3>
      )}
    </div>
  );
}
