import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.css"
import{useEffect, useState} from "react"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 40, itemsToShow: 2 },
  { width: 40, itemsToShow: 3 },
  { width: 40, itemsToShow: 4 },
];

const Slider = () => {
  return (
    <>
      <h4 className="H4-for-gameOnsllae">Games On Sale</h4>
      <div>
        <div className="for-div-and-slider-dsatat">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div>
            <img  className="Img-for-Slider-k" src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_KenFollettsThePillarsoftheEarth_DaedalicEntertainment_S2_1200x1600-7f09b826a330e216f32de8c86b2ac467" />
            </div>
            
          </Item>

          <Item>
            <img  className="Img-for-Slider-k" src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Voidtrain_NEARGA_S2_1200x1600-497cd22d4e46bc6c5ba56c3215fc5b4f" />
          </Item>
          <Item>
            <img  className="Img-for-Slider-k" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfMykB8OTVnE4I9kc6M44tHuJnWvqbkuonY1ks1RUgQ3T6koqVNjX4f4LMyuKTIfIFDc&usqp=CAU" />
          </Item>
          <Item>
            <img  className="Img-for-Slider-k" src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b" />
          </Item>
          <Item>
            <img  className="Img-for-Slider-k" src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7" />
          </Item>

          <Item>
            <img  className="Img-for-Slider-k" src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MarthaIsDead_LKA_S2_1200x1600-85e4e64ad99f730c8246b618d08384fe" />
          </Item>
          <Item>
            <img  className="Img-for-Slider-k" src="https://i1.sndcdn.com/artworks-a1ZayUfpQn0t9yaK-OT8kkg-t500x500.jpg" />
          </Item>
          <Item>
            <img  className="Img-for-Slider-k" src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435" />
          </Item>
        </Carousel>
      </div>
      </div>
    </>
  );
};

// export default Slider;





// function Slider() {
//   const [game, setGame] = useState(null)
//   const url = "http://localhost:2345/games"

//   const getdata = async() => {
//     try {    
//       let response = await fetch(url);
//       let data = await response.json()
//       setGame(data.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() =>{
//     getdata()
//   },[])
//   console.log(game)
//   return (
//     <div className="for-div-and-slider-dsatat">
//     <Carousel breakPoints={breakPoints}>
//      <div className="game-size-for-all">
//      {game && game.slice(0, 10).map((item) => {
// return (
//   <Item>
//    <div className="slider-flexxxx">
//   <img   src={item.logo} />
//   </div>
//   </Item>)
//            }) 
//           }

//     </div>
//     </Carousel> 
//     </div>
//   )
// }

// // {items.map(item => <div key={item.id}>{item.title}</div>)}


         
export default Slider;