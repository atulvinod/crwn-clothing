import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts";
import { useContext } from "react";
export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const getCartItemCount = (cartItems) =>{
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  return (
    <div className="cart-icon-container" onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{getCartItemCount(cartItems)}</span>
    </div>
  );
};
