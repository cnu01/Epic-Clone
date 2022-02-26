import React from "react";
import { Card } from "../MovieCards/index";
import "./Browse.css";

export const Browse = () => {
  return (
    <div className="main-contain">
      <div className="left-side">
        <h4>New Release</h4>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="right-side">
        <h4>Filter</h4>
        <input type="text" placeholder="Keywords" />
        <hr />
        <h4>Events</h4>
        <button>EA February Sale 2022</button>
        <button>Rockstar Games Sale</button>
        <hr />
        <h4>Price</h4>
        <button>Free</button>
        <button>Under ₹750.00</button>
        <button>Under ₹2,250.00</button>
        <button>Discounted</button>
        <hr />
        <h4>GENRE</h4>
        <button>Action</button>
        <button>Adventure</button>
        <button>Indie</button>
      </div>
    </div>
  );
};
