import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts";
import { Logger, LogLevel, signOutUser } from "../../services";

export const Navigation = () => {
  var { currentUser, setCurrentUser } = useContext(UserContext);
  Logger(currentUser);

  const signOutHandler = async () => {
    try {
      await signOutUser();
      setCurrentUser(null);
    } catch (err) {
      Logger(err, LogLevel.ERROR);
    }
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutHandler}>
              Sign-Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
