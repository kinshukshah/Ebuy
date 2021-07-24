import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./Pages/homepage/homepage.component";

import { Routes, Route, Link, Router } from "react-router-dom";
import ShopPage from "./Pages/shoppage/shop.component";
import Footer from "./components/footer/footer.component";
import ShopCategory from "./Pages/shopCategoryPage/shop-category.component";
import { CartProvider } from "./components/Context/Cart.Context";
import CheckoutPage from "./Pages/checkout/checkout.component";
import { useAuth } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute/private-route";
import { Login } from "./Pages/login/login.component";
import Loading from "./components/loading/loading.component";
import { useLoading } from "./hooks/useLoading";
import SignUp from "./Pages/signup/signup.component";
function App() {
  const { user, dispatch } = useAuth();
  console.log(user);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/shop/:category" element={<ShopCategory />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <PrivateRoute path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
