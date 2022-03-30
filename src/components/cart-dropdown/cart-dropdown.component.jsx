import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts";
import { Button } from "..";
import { CartItem } from "../cart-item";
export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button> Go to checkout</Button>
    </div>
  );
};
