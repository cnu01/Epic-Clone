
import './App.css';
import Login from  "./components/Login/Login"
import Signup from "./components/SignUp/SignUp"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import SinglepageFinal from './components/SinglepageFinal';
import Home from './components/Home';

function App() {
 

  return (
   <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/game/:id" element={<SinglepageFinal />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
   </Routes>
      
     
     
    
     
    
  );
}

export default App;
