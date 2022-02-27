import './App.css';
import {Main} from "./components/MainHome"
import {CartUI} from "./components/Cart/Cart"
import {Wishlist} from './components/Wishlist/Wishlist'
import {CheckOut} from './components/Checkout/Checkout'
import SinglepageFinal from './components/AkComponents/SinglepageFinal';
import {Browse} from './components/Browse/Browse'
import SignUp from './components/signup/Signup'
import Login from './components/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/cart" element={<CartUI/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
       <Route path='/browse' element={<Browse/>}></Route> 
        <Route path='/signup' element={<SignUp/>}></Route> 
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/Payment-ref' element={<CheckOut/>}></Route> 
        <Route path="/game/:id" element={<SinglepageFinal />} />
    </Routes>
    
    </div>
  );
}

export default App;   
