import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
export const Checkout = () => {
  const { finalCartItem, finalCartAmount } = useContext(CartContext);
  console.log(finalCartItem);
  const completePayment = () => {
    if (finalCartItem.length > 0) {
      axios
        .post(
          `http://localhost:2345/purchased`,
          { game_id: finalCartItem },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          alert("Purchase complete");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="payment_main_container">
          <br />
          <div className="payment_title">CHECKOUT</div>
          <br />
          <div className="payment_card_container">
            <div>&#128179; Credit Card / Debit Card</div>
            <div>
              <p style={{ fontSize: "14px" }}>CARD DETAILS</p>
            </div>
            <div>
              <input
                style={{ width: "62vw" }}
                type="text"
                placeholder="Card Number"
                required
              />
            </div>
            <br />
            <div className="payment_input_2">
              <div>
                <input
                  style={{ width: "40vw" }}
                  type="text"
                  placeholder="Expiration ( MM / YY )"
                  required
                />
              </div>
              <div>
                <input
                  style={{ width: "20vw" }}
                  type="text"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <br />
            <div>
              Payable Amount : <strong>₹{finalCartAmount}</strong>
            </div>
            <br />
            <div>
              <Link to="/purchased">
                <input
                  type="submit"
                  onClick={completePayment}
                  className="get-btn cart_checkout"
                  style={{ color: "white", fontSize: "14px" }}
                  value="Pay now"
                />
              </Link>
            </div>
            <br />
          </div>
        </div>
      </form>
    </div>
  );
};
