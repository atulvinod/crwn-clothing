import * as Styled from "./cart-icon.styles";
import { CartContext } from "../../contexts";
import { useContext } from "react";
export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };

  return (
    <Styled.CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <Styled.ShoppingIcon />
      <Styled.CartItemCount>{getCartItemCount(cartItems)}</Styled.CartItemCount>
    </Styled.CartIconContainer>
  );
};
