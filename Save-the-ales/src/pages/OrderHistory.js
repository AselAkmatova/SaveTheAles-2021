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
  }, [dispatch, token]);

  return (
    <div className="orders-history">
      <h2 className="orders-history__title">История заказов</h2>
      {loading ? (
        <img className="loading" src={beer} alt="beer icon"></img>
      ) : orders.length > 0 ? (
        <div className="orders-history__list">
          {orders.map((order) => (
            <div
              key={order.id}
              className="orders-history__history-item history-item"
            >
              <div className="history-item__dishes">
                <h5>Блюда:</h5>
                <p> {order.dishes} </p>
              </div>
              <div className="history-item__date">
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
