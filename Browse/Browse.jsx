import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Browse.css";
import { Card } from "./Card";

export const Browse = () => {
  const [list, setList] = useState([]);
  const [finalList,setFinalList] = useState([]);
  const [actionList, setActionList] = useState({});
  const [sortData,setSortData] = useState("");
  useEffect(() => {
    getAllData();
  }, []);

  
  const getAllData = () => {
    axios.get("http://localhost:2345/games", {
      headers: {
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxNjY3ZDdhMzhiOGM4MjVkNDQ2M2QyIiwiaWF0IjoxNjQ1ODc3NDk2fQ.SLqPFPS6NVn_V5feCcSY8v0zfBb6gb7Ohzl96lQIQws"
      }
    }).then((res) => res.data).then(({ data }) => {
      if (data != undefined) {
        let obj = {};
        data.forEach((e) => {
          if (e.genres.length > 0) {
            e.genres.forEach(item => {
              if (obj[item] == undefined) {
                obj[item] = 1;
              }
            });
          }
        });
        setList(data);
        setFinalList(data);
        setActionList(obj);
      }
    }).catch(e => {
      console.log(e);
    })
  }

  const lowToHigh = ()=>{
      let data2 = list;
        data2.sort((a,b)=>{
          return a.price.mainPrice-b.price.mainPrice;
      });
      
      setList(data2);
      setSortData("lth");
  }
  const highToLow = ()=>{
        let data2=list;
        data2.sort((a,b)=>{
                return b.price.mainPrice-a.price.mainPrice;
            });
            
            setList(data2); 
            setSortData("htl");
  }

  const alphabetical = ()=>{
    let data2=list;
    data2.sort((a,b)=>{
              if(a.title>b.title)
              {
                return 1;
              }
              else
              {
                return -1;
              }
        });
        
        setList(data2); 
        setSortData("alpha");
  }
  const newRelease = ()=>{
     getAllData();
  }
  const searchTitle=(e)=>{
    let value = e.target.value.toUpperCase();
    
    let arr = finalList.filter((item)=>item.title.toUpperCase().lastIndexOf(value)!=-1);
    setList(arr);
  }
  const filterByPrice=(price)=>{
      let arr = finalList.filter((item)=>item.price.mainPrice<=price);
      setList(arr);
  }
  const filterGenre = (filter_genre) => {
    
    let arr = finalList.filter((item) => {
      if (item.genres.length > 0) {
        let found=false;
        item.genres.forEach(genre => {
          if (genre == filter_genre) {
            found=true;
          }
        })
        if(found)
        {
          return true;
        }
      }

      return false;
    })
    setList(arr);
    console.log(list);
  }
  return (
    <div className="main-contain">
      <div className="left-side">
        <h4 className="h4">Sort By: 
        <select onChange={(e)=>{
          let value = e.target.value;
              if(value=='lth')
              {
                 lowToHigh();
              }
              else if(value=='htl')
              {
                highToLow();
               
              }
              else if(value=='alpha')
              {
                alphabetical();
              }
              else if(value=='new')
              {
                newRelease();
              }
          }}>
          <option value="new">New Release</option>
          <option value="alpha">Alphabetical</option>
          <option value="lth">Price: Low to High</option>
          <option value="htl">Price: High to Low</option>
        </select></h4>
        <div className="left_cards">
          {
            list.length > 0 ? list.map(item => {
              return <Card src={item.thumbnail} title={item.title} price={item.price.mainPrice} />
            }) : ""
          }
        </div>
      </div>
      <div className="right-side">
        <h4 className="h4">Filter</h4>
        <input className="input" onChange={(e)=>{
                searchTitle(e);
        }} type="text" placeholder="Keywords" />
        <br/> <br/>
        <hr className="hr" />
        <br/>
        <h4 className="h4">Price</h4>
        <button className="button" onClick={()=>filterByPrice(0)}>Free</button>
        <button className="button" onClick={()=>filterByPrice(750)}>Under ₹750.00</button>
        <button className="button" onClick={()=>filterByPrice(2250)}>Under ₹2,250.00</button>
        <br/>
        <hr className="hr" />
        <br/>
        <h4 className="h4">GENRE</h4>
        {
          Object.keys(actionList).map(item => {
            return <button value={item} onClick={()=>{filterGenre(item)}} className="button">{item}</button>
          })
        }

      </div>
    </div>
  );
};
