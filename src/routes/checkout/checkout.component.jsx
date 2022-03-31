import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts";
import { CheckoutItem } from "../../components";

export const CheckoutRoute = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotalItems = (cartItems) => {
    return cartItems.reduce((acc, items) => {
      return acc + (items.quantity * items.price);
    }, 0);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem item={item} key={item.key}></CheckoutItem>;
      })}
      <span className="total">Total :{calculateTotalItems(cartItems)}</span>
    </div>
  );
};
