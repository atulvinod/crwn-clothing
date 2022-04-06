import * as Styled from "./cart-dropdown.styles.jsx";
import { Button, CartItem } from "..";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "../../store/index.js";
import { useNavigate } from "react-router-dom";
export const CartDropdown = () => {
  const cartItems = useSelector(cartItemsSelector);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("checkout");
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
