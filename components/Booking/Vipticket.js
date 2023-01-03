import { useState } from "react";

export default function Viptickets(props) {
  const [totalVip, setTotalVip] = useState();

  // Sending 2 parameters to addVipToCart
  function setQuantities() {
    props.addVipToCart(props.cartVip, totalVip);
    // Callback the function that defines the atribute max according to the quantity of tickets.
    props.tentsForTickets();
  }

  function displayQuantityTicketsVip() {
    const quantity = document.querySelector(".vip-quantity");
    const tickets = document.querySelector("#ticket-vip-quantity");
    quantity.textContent = tickets.value + "x";
    // console.log(tickets.value);
    // Calculating the total
    const total = tickets.value * 1299;
    document.querySelector(".totalTicketsVip").textContent = "DKK " + total;
    setTotalVip(parseInt(tickets.value, 10));
    return totalVip;
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
            <input id="ticket-vip-quantity" type="number" name="tickets-quantity" min="0" max="9" placeholder="0" className="input-number-tickets" onChange={displayQuantityTicketsVip}></input>
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
