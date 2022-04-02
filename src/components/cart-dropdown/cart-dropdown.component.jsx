import * as Styled from "./cart-dropdown.styles.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts";
import { Button, CartItem } from "..";
export const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("checkout");
    setIsCartOpen(false);
  };

  return (
    <Styled.CartDropdownContainer>
      <Styled.CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <Styled.EmptyMessage>
            <span> Your cart is empty</span>
          </Styled.EmptyMessage>
        )}
      </Styled.CartItemsContainer>
      <Button onClick={navigateToCheckout}>Go to checkout</Button>
    </Styled.CartDropdownContainer>
  );
};
