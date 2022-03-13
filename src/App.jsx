import './App.css';
import {Main} from "./components/MainHome"
import SinglepageFinal from './components/AkComponents/SinglepageFinal';
import {Browse} from './components/Browse/Browse'
import Login from './components/Login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { Wishlist } from './components/Wishlist/Wishlist';
import { Checkout } from './components/Checkout/Checkout';
import { SignUp } from './components/SignUp/SignUp';
function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
       <Route path='/browse' element={<Browse/>}></Route> 
        <Route path='/signup' element={<SignUp/>}></Route> 
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/Payment-ref' element={<Checkout/>}></Route> 
        <Route path="/game/:id" element={<SinglepageFinal />} />
    </Routes>
    
    </div>
  );
}

export default App;   
