import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./Pages/homepage/homepage.component";

import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/shoppage/shop.component";
import Footer from "./components/footer/footer.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import { useAuth } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute/private-route";
import { Login } from "./Pages/login/login.component";
import { useLoading } from "./hooks/useLoading";
import SignUp from "./Pages/signup/signup.component";
import { useEffect } from "react";
import { useProducts } from "./context/ProductContext";
import {
  getProducts,
  getUserCartDetails,
  getUserWishlistDetails,
} from "./utils/Apicalls";
import Products from "./Pages/ProductsPage/products.component";
import { useUserState } from "./context/StateContext";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.component";
import { Wishlist } from "./Pages/Wishlist/wishlist.component";
import { AccountPage } from "./Pages/Account/account.component";
function App() {
  const { setProducts } = useProducts();
  const {
    user: { isLogin },
  } = useAuth();
  const { userState, userStatedispatch } = useUserState();
  const [loading, stopLoading, startLoading] = useLoading();
  console.log(userState);
  useEffect(() => {
    (async function () {
      startLoading();
      await getProducts(setProducts);
      stopLoading();
    })();
  }, []);

  useEffect(() => {
    if (isLogin) {
      (async function () {
        startLoading();
        await getUserCartDetails(userStatedispatch);
        await getUserWishlistDetails(userStatedispatch);
        stopLoading();
      })();
    }
  }, [isLogin]);

  return (
    <div className="App full-container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/products" element={<Products />} />
        <Route
          exact
          path="/wishlist"
          element={
            <PrivateRoute path="/wishlist">
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout/cart"
          element={
            <PrivateRoute path="/checkout/cart">
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute path="/account">
              <AccountPage />
            </PrivateRoute>
          }
        />
        <Route exact path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {loading}
    </div>
  );
}

export default App;
