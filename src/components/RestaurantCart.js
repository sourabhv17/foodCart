import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import "./RestaurantCart.css";
import { clearCart } from "../toolkit/cartSlice";

const RestaurantCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-head">
      <div className="clear-cart" onClick={() => handleClearCart()}>
        Clear cart
      </div>
      <div className="cart-items">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default RestaurantCart;
