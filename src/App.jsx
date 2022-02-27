import logo from './logo.svg';
import './App.css';
import { MainSlider } from './components/MainSlider';
import { Browse } from './components/Browse/Browse';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div className="App">
        {/* <MainSlider/> */}
        {/* <Browse/> */}
        <Login/>
        {/* <SignUp/> */}
    </div>
  );
}

export default App;
