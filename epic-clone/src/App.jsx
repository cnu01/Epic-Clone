// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx";

import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { Transaction } from './components/Transaction';





function App() {
  return (<div className="App" >
    <Header />
    <Navbar />
    <Account />
    <Transaction />
    <Footer />

  </div>
  );
}

export default App;