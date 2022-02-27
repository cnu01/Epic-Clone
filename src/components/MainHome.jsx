import Footer from './Footer/Footer';
import { Navbar } from './Header/Navbar';
import Header from './Header/Header';
import {MainSlider} from "./MainSlider/MainSlider"
import Slider from "./Slider/Slider"
import MovieCard from "./MovieCard/MovieCard"
import Slider2 from "./Slider/Slider2"
import  FreeCardContainer from './freecard/FreeCardContainer'
import Group from './AkComponents/Group';
import SectionCombined from './AkComponents/SectionCombined';

export const Main = ()=>{
return(
    <div>
     <Header />
    <Navbar />
    <MainSlider/>
    <Slider/>
     {/* <FreeCardContainer/> 
    <MovieCard />  */}
    {/* <SectionCombined />
    <Slider2/>

    
    
    <Group />
    */}
    <Footer /> 
   
  
    </div>
)
}