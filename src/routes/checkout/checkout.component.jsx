import "./checkout.styles.scss";
import { CheckoutItem, PaymentForm} from "../../components";
import { useSelector } from "react-redux";
import { selectCartTotal,cartItemsSelector } from "../../store";

export const CheckoutRoute = () => {
  const totalValue = useSelector(selectCartTotal);
  const cartItems = useSelector(cartItemsSelector);
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
      <span className="total">Total :{totalValue}</span>
      <PaymentForm/>
    </div>
  );
};
