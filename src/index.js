import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./components/Context/Cart.Context";
import { ProductProvider } from "./context/ProductContext";
import { StateProvider } from "./context/StateContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <StateProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </StateProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
