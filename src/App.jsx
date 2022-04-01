import { Routes, Route } from "react-router-dom";
import * as routes from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<routes.Navigation />}>
        <Route index element={<routes.HomeRoute />} />
        <Route path="auth" element={<routes.AuthRoute />} />
        {
          /**
           *  /* is a wildcard which indicates that we should render this component
           *  irrespective of what is after the prefixed route
           */
        }
        <Route path="shop/*" element={<routes.Shop />} />
        <Route path="checkout" element={<routes.CheckoutRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
