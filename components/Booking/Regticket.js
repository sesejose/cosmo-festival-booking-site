import { useState, createContext } from "react";
import { useContext } from "react";
import Context from "../Context";

export default function Regtickets(props) {
  const context = useContext(Context);
  const [totalRegular, setTotalRegular] = useState();

  // Define totalReg when onClick in Choose amount
  function setQuantities() {
    context.setTotalReg(totalRegular);
    console.log(context.totalReg);
    // Callback function in tTickets.js
    props.tentsForTickets();
    const amount = context.totalReg;
    if (context.cartReg.amount === 0) {
      context.setCartReg({ ...context.cartReg, amount: amount });
    }
  }

  // Define totalReg when onClick in Input field
  function displayQuantityTicketsRegular(e) {
    context.setTotalReg(parseInt(e.target.value, 10));
    const quantity = document.querySelector(".regular-quantity");
    const tickets = document.querySelector("#ticket-regular-quantity");
    quantity.textContent = tickets.value + "x";
    const total = tickets.value * 799;
    document.querySelector(".totalTicketsRegular").textContent = "DKK " + total;
    setTotalRegular(parseInt(tickets.value, 10));
    console.log(tickets.value);
  }

  function openRegular() {
    const regular = document.querySelector(".open-ticket-regular");
    if ((regular.style.display = "none")) {
      regular.style.display = "flex";
    } else {
      regular.style.display = "none";
    }
  }

  return (
    <>
      <div className="ticket-regular">
        <div className="seven-days">
          <h1>7</h1>
          <h4>Days</h4>
        </div>
        <div className="flex-column">
          <div className="flex-row-space-around">
            {/* <h2>{props.ticket.name}</h2> */}
            {/* <h2>DKK {props.ticket.price}</h2> */}
            <h2>Regular Pass</h2>
            <h2>DKK 799</h2>
          </div>
          <div className="flex-row-space-around">
            <button className="read-more">Read more</button>
            <button className="btn-add" onClick={openRegular}>
              Choose amount
            </button>
          </div>
        </div>
      </div>
      <div id="choose-quantity-regular" className="open-ticket-regular">
        <div className="flex-row-space-around quantity-container">
          <form className="flex-row-space-around">
            <label htmlFor="ticket-regular-quantity"></label>
            <input id="ticket-regular-quantity" type="number" name="tickets-quantity" min="0" max="9" placeholder="0" className="input-number-tickets" onClick={displayQuantityTicketsRegular}></input>
          </form>
          <div className="flex-row-space-around">
            <h3 className="regular-quantity">0X</h3>
            <h3>799</h3>
          </div>
          <div className="flex-row-space-around">
            <h3>Total:</h3>
            <h3 className="totalTicketsRegular">0</h3>
          </div>
        </div>
        <button value="Add to cart" onClick={setQuantities} className="btn-add">
          Add to cart
        </button>
      </div>
    </>
  );
}
