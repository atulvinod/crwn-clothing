import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles.jsx";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext, CartContext } from "../../contexts";
import { Logger, LogLevel, signOutUser } from "../../services";
import { CartIcon, CartDropdown } from "../../components";
export const Navigation = () => {
  var { currentUser } = useContext(UserContext);
  var { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (err) {
      Logger(err, LogLevel.ERROR);
    }
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as={'span'} onClick={signOutHandler}>Sign-Out</NavLink>
          ) : (
            <NavLink to="/auth">Sign-in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {/* {To show the cart dropdown conditionally, we use the short-circuit operator} */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
