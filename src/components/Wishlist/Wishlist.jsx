import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Navbar } from "../Header/Navbar";
import "./Wishlist.css";
export const Wishlist = () => {
  const [cartCount, setCartCount] = useState(0);
  const [mainData, setMainData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    let sum = 0;
    mainData.forEach((item) => {
      sum += item.price.mainPrice;
    });
    setTotalAmount(sum);
    setCartCount(mainData.length);
  }, [mainData]);

  const removeItem = (id) => {
    console.log("id", id);
    axios
      .get(`http://localhost:2345/wishlist/remove/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res)
      .then(({ data }) => {
        console.log("remove item ", data);
        setMainData(data.data);
      })
      .catch((err) => {
        console.log("Error ".err);
      });
  };
  const getData = () => {
    axios
      .get("http://localhost:2345/wishlist", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res)
      .then(({ data }) => {
        // console.log(data);
        setMainData(data.data);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="wishlist_main_container">
        <h2>My Cart</h2>
        <br />
        <div className="wishlist_inner_box">
          {cartCount == 0 ? (
            <div className="wishlist_item_content wishlist_item_empty">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="wishlist_empty_svg"
                  viewBox="0 0 45 52"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                      fill="currentColor"
                    ></path>
                    <path
                      stroke="#FFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                    ></path>
                  </g>
                </svg>

                <p>Your cart is empty.</p>
                <p className="wishlist_empty_p">Shop for Games & Apps</p>
              </div>
            </div>
          ) : (
            <>
              <div className="wishlist_item_container">
                {mainData.map((item) => {
                  return (
                    <div className="wishlist_item_content">
                      <div>
                        <img src={item.cardImage} />
                      </div>
                      <div>
                        <a className="wishlist_float_left">{item.title}</a>
                        <a className="wishlist_float_right">
                          ₹{item.price.mainPrice}
                        </a>
                        <div className="wishlist_remove_btn">
                          <a onClick={() => removeItem(item._id)}>
                            &minus; Remove
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
