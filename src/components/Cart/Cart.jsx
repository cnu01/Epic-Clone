import "./Cart.css"
import {Navbar} from '../Header/Navbar'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"; 

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

export function CartUI() {

  const [isEmpty,setIsEmpty] = useState(true);
  const [order,setOrder] = useState([]);
  const [game,setGame] = useState([]);
  const [dataList,setDataList] = useState([]);
  const [sum,setSum] = useState(0);
  useEffect(()=>{
    getCartItems();
    getGameData();
  },[]);

  useEffect(()=>{
    filterData();
  },[game])

  const getCartItems = ()=>{
        axios.get("http://localhost:2345/cart", {
            headers: {
              Authorization: localStorage.getItem("token") 
            }
    
           }).then(res=>res).then(({data})=>{
               if(data.status)
               {
                    setOrder(data.data);
                    setIsEmpty(false);
               }
               else
               {

               }
            
        }).catch(e=>{
            console.log(e);
            setIsEmpty(true)
        })
  }

const getGameData = ()=>{
    axios.get("http://localhost:2345/games").then(res=>res).then(({data})=>{
        if(data.status)
        {
            setGame(data.data);
            setIsEmpty(false);
        }
        else
        {
            setIsEmpty(true)
        }
    }).catch(e=>{
        console.log(e);
        setIsEmpty(true)
    })
}

const filterData = ()=>{
    let arr=[];
    game.forEach((game_item)=>{
            order.forEach((order_item)=>{
                    if(order_item==game_item._id)
                    {
                        setSum((prev)=>{
                            return prev + (+game_item.price.mainPrice);
                        })
                        arr.push(game_item);
                    }
            });
    });
    setDataList(arr);
}


  const routeChange = () =>{ 
    return(
        <div>
             <Link to="/">Discover</Link>
        </div>
    )
  }

    if(isEmpty){
        return(
            
            <div>
                <div>
                <Header/>
                    <Navbar />
                   
                </div>
                <div>
                   <h1 className="Mycart-text">My Cart</h1>
                </div>
                <div>
                    <span className="css-cvmfyy" aria-hidden="true" data-testid="icon" data-component="Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg css-w1atjl" viewBox="0 0 45 52">
                    <g fill="none" fill-rule="evenodd">
                    <path d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z" fill="currentColor">
                    </path><path stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5">
                    </path></g></svg></span>
                </div>
                <div>

                    <span>
                        <span className="class-of-cart-empty"><h2 className="class-of-cart-empty">Your cart is empty.</h2></span>
                    </span>
                </div>
                <div>
                <span className="class-of-cart-empty  cart-shop-games">Shop for Games &amp; Apps</span>
                </div>
                <Footer/>
                </div>
        ) 
    }if(!isEmpty){
        return(
            <div>
                 <div>
                 <Header/>
                    <Navbar />
                    
                </div>
            <div>
            <h1 className="Mycart-text">My Cart</h1>
            </div >
            <div className="div-for-div-two-divs">
            <div className="div-for-push-grid-main " >
            {dataList.map((user) => (
                <div className="div-for-push-grid ">
                    <div className="div-for-display-price-img-as-flex">
            <img className="img-Cart-page-push data-for-flex-show" src={user.thumbnail} />
            <div className="user data-for-flex-show">{user.title}</div>
            <div className="data-for-flex-show"> {user.price.mainPrice}</div>
            </div>
            <div className="divNotdisplay"></div>
            </div>
             ))}
            
            </div>
            <div className="Div-for-left-Data-Page">
                <div className="div-for-divide-the-data">
                <div>
                <h3>Games and Apps Summary</h3>
                <div className="display-flex-as-one-index">
                <h3 >Price </h3>
                <h3>₹ {sum}.00</h3>
                </div >
                <div className="display-flex-as-one-index">
                <h3>Coupon Discount </h3>
                <h3>₹ 20.00</h3>
                </div>
                <div className="display-flex-as-one-index">
                <h3>Sale Discount</h3>
                <h3>₹ 0.00</h3>
                </div>
                <hr></hr>
                <div className="display-flex-as-one-index">
                <h3>Sub Total</h3>
                <h3>₹ {sum-20}</h3>
                </div>

             <button className="Button-checkout" ><Link to="/" className='addcart-link'>Confirm and pay</Link></button> 
                
                </div>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
   
}