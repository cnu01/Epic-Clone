import "./App.css";
import { Main } from "./components/MainHome";
import SinglepageFinal from "./components/AkComponents/SinglepageFinal";
import { Browse } from "./components/Browse/Browse";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Checkout } from "./components/Checkout/Checkout";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";
import { Purchased } from "./components/Purchased/Purchased";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/game/:id" element={<SinglepageFinal />} />
        <Route path="/purchased" element={<Purchased />} />
      </Routes>
    </div>
  );
}

export default App;
