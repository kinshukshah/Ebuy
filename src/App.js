import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./Pages/homepage/homepage.component";

import { Routes, Route, Link, Router } from "react-router-dom";
import ShopPage from "./Pages/shoppage/shop.component";
import Footer from "./components/footer/footer.component";
import ShopCategory from "./Pages/shopCategoryPage/shop-category.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import { useAuth } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute/private-route";
import { Login } from "./Pages/login/login.component";
import { useLoading } from "./hooks/useLoading";
import SignUp from "./Pages/signup/signup.component";
import { useEffect } from "react";
import { useProducts } from "./context/ProductContext";
import { getProducts, getUserCartDetails } from "./utils/Apicalls";
import Products from "./Pages/ProductsPage/products.component";
import { useUserState } from "./context/StateContext";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.component";
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
        stopLoading();
      })();
    }
  }, [isLogin]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/shop/:category" element={<ShopCategory />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/products" element={<Products />} />
        <PrivateRoute path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {loading}
    </div>
  );
}

export default App;
