
import './App.css';
import FreeCardContainer from './components/FreeCardContainer';
import GmaeSection from './components/GameSection';
import Group from './components/Group';
import SectionCombined from './components/SectionCombined';
import SingleGamePage from "./components/singlepage/SingleGamePage"
import SinglePageSpecs from './components/singlePageSpecs/SinglePageSpecs';

function App() {
 

  return (
    <div className="App">
      <FreeCardContainer />
      <SectionCombined />
      <Group />
    {/* <SingleGamePage />
     <SinglePageSpecs /> */}
    </div>
  );
}

export default App;
