import "./checkout.styles.scss";
import { CheckoutItem } from "../../components";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "../../store";

export const CheckoutRoute = () => {
  const cartItems = useSelector(cartItemsSelector);

  const calculateTotalItems = (cartItems) => {
    return cartItems.reduce((acc, items) => {
      return acc + items.quantity * items.price;
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
        return <CheckoutItem item={item} key={item.name}></CheckoutItem>;
      })}
      <span className="total">Total :{calculateTotalItems(cartItems)}</span>
    </div>
  );
};
