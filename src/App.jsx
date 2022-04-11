import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "./services";
import { setCurrentUser } from "./store";
import * as routes from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // the listener will return the user when authenticated and
      // null when the user has logger out, hence we can centrailize this logic here

      dispatch(setCurrentUser(user));
    });

    // when we return a function from the useEffect, it is executed when the
    // component is unmounted
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<routes.Navigation />}>
        <Route index element={<routes.HomeRoute />} />
        <Route path="auth" element={<routes.AuthRoute />} />
        {/**
         *  /* is a wildcard which indicates that we should render this component
         *  irrespective of what is after the prefixed route
         */}
        <Route path="shop/*" element={<routes.Shop />} />
        <Route path="checkout" element={<routes.CheckoutRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
