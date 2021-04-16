import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./Pages/homepage/homepage.component";

import { Switch, Route, Link } from "react-router-dom";
import ShopPage from "./Pages/shoppage/shop.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
