import { useState, createContext } from "react";
import { useContext } from "react";
import Context from "../Context";

export default function Viptickets(props) {
  const context = useContext(Context);
  const [totalVipp, setTotalVipp] = useState();

  // Define totalReg when onClick in Choose amount
  function setQuantities() {
    context.setTotalVip(totalVipp);
    console.log(context.totalVip);
    // Callback function in tTickets.js
    props.tentsForTickets();
    const amount = context.totalVip;
    if (context.cartVip.amount === 0) {
      context.setCartVip({ ...context.cartVip, amount: amount });
    }
  }

  // Define totalReg when onClick in Input field
  function displayQuantityTicketsVip(e) {
    context.setTotalVip(parseInt(e.target.value, 10));
    const quantity = document.querySelector(".vip-quantity");
    const tickets = document.querySelector("#ticket-vip-quantity");
    quantity.textContent = tickets.value + "x";
    const total = tickets.value * 1299;
    document.querySelector(".totalTicketsVip").textContent = "DKK " + total;
    setTotalVipp(parseInt(tickets.value, 10));
    console.log(tickets.value);
  }

  function openVip() {
    const vip = document.querySelector(".open-ticket-vip");
    if ((vip.style.display = "none")) {
      vip.style.display = "flex";
    } else if ((vip.style.display = "flex")) {
      vip.style.display = "none";
    }
  }

  return (
    <>
      <div className="ticket-vip">
        <div className="seven-days">
          <h1>7</h1>
          <h4>Days</h4>
        </div>
        <div className="flex-column">
          <div className="flex-row-space-around">
            {/* <h2>{props.ticket.name}</h2> */}
            {/* <h2>DKK {props.ticket.price}</h2> */}
            <h2>VIP Pass</h2>
            <h2>DKK 1299</h2>
          </div>
          <div className="flex-row-space-around">
            <button className="read-more">Read more</button>
            <button className="btn-add" onClick={openVip}>
              Choose amount{" "}
            </button>
          </div>
        </div>
      </div>
      <div id="choose-quantity-vip" className="open-ticket-vip">
        <div className="flex-row-space-around quantity-container">
          <form className="flex-row-space-around">
            <label htmlFor="ticket-vip-quantity"></label>
            <input id="ticket-vip-quantity" type="number" name="tickets-quantity" min="0" max="9" placeholder="0" className="input-number-tickets" onClick={displayQuantityTicketsVip}></input>
          </form>
          <div className="flex-row-space-around">
            <h3 className="vip-quantity">0X</h3>
            <h3>1299</h3>
          </div>
          <div className="flex-row-space-around">
            <h3>Total:</h3>
            <h3 className="totalTicketsVip">0</h3>
          </div>
        </div>
        <button onClick={setQuantities} className="btn-add">
          Choose amount
        </button>
      </div>
    </>
  );
}
