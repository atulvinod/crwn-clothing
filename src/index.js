import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { UserProvider, CategoriesProvider, CartProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* Any child component inside the provider can access the context values */}
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
