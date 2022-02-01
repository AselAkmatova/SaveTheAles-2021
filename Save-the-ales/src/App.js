import "./styles/App.scss";
import "./styles/Responsive.scss";
import Header from "./components/header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Checkout from "./pages/Checkout";
import BookTheTable from "./pages/BookTable";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import Dishes from "./pages/Dishes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/dishes" exact component={Dishes} />
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/book" exact component={BookTheTable} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
          <Route
            path="/profile/orderhistory"
            exact
            component={OrderHistory}
            key="orderHistory"
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
