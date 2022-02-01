import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loggingOut } from "../actions/user";
import { BoxArrowRight, ListUl } from "react-bootstrap-icons";

export default function Profile() {
  let user = useSelector((state) => state.user.user);
  let dispatch = useDispatch();
  let logout = () => {
    dispatch(loggingOut());
  };

  return (
    <div className="profile">
      <h2>
        Добро пожаловать <span> {user.data.username} </span>
      </h2>
      <div>
        <ListUl size={25} color="white" />
        <Link to={`/profile/orderhistory`}>История заказов</Link>
      </div>
      <div>
        <BoxArrowRight size={25} color="white" />
        <Link to={`/`} onClick={() => logout()}>
          Выйти
        </Link>
      </div>
    </div>
  );
}
