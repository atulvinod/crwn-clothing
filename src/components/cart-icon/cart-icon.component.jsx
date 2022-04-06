import * as Styled from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { isCartOpenSelector, cartItemsSelector, setCartIsOpen } from "../../store";
export const CartIcon = () => {
  const dispatch = useDispatch();

  const setCartOpenState = (state) => {
    dispatch(setCartIsOpen(state));
  };

  const isCartOpen = useSelector(isCartOpenSelector);
  const cartItems = useSelector(cartItemsSelector);

  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };

  return (
    <Styled.CartIconContainer onClick={() => setCartOpenState(!isCartOpen)}>
      <Styled.ShoppingIcon />
      <Styled.CartItemCount>{getCartItemCount(cartItems)}</Styled.CartItemCount>
    </Styled.CartIconContainer>
  );
};
