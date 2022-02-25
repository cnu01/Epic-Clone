
import './App.css';

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
   </Routes>
      
     
     
    
     
    
  );
}

export default App;
