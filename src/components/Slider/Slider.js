import React from "react";
import ReactDom from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
  return (
    <>
      <h4>Games On Sale</h4>
      <div>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          </Item>

          <Item>
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg?t=1645439355" />
          </Item>
          <Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          </Item>
          <Item>
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg?t=1645439355" />
          </Item>
          <Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          </Item>

          <Item>
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg?t=1645439355" />
          </Item>
          <Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          </Item>
          <Item>
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg?t=1645439355" />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
