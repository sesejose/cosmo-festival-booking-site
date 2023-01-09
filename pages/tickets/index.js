import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import Pages from "../../components/Booking/Pages";
import Basket from "../../components/Booking/Basket";
import Context from "../../components/Context";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
import { sendEtagResponse } from "next/dist/server/send-payload";

export default function TicketsPage(props) {
  // Tickets and carts
  const context = useContext(Context);

  // Green
  const [green, setGreen] = useState();
  const [greenPrice, setGreenPrice] = useState();
  // Tents
  // const [totalTent2, setTotalTent2] = useState();
  // const [totalTent3, setTotalTent3] = useState();
  const [tent2Price, setTent2Price] = useState();
  const [tent3Price, setTent3Price] = useState();
  // Accommodation
  const [spot, setAcommodation] = useState();
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const area1 = props.areas[0].available;
  const area2 = props.areas[1].available;
  const area3 = props.areas[2].available;
  const area4 = props.areas[3].available;
  const area5 = props.areas[4].available;
  // Total price
  // const [subtotalPrice, setSubtotalPrice] = useState();
  // const [totalPrice, setTotalPrice] = useState();
  const ticketsQuantity = context.cartReg.amount + context.cartVip.amount;
  // Camping price
  const [reserveID, setReserveID] = useState({});
  const fixedCampingPrice = 99;

  // Basket Total Price

  // Check if green is true and set State
  function updateGreen(value) {
    // console.log(greenCheck);
    setGreen(value);
    // console.log(value);
    if (value == "Yes") {
      setGreenPrice(249);
    } else {
      setGreenPrice(0);
    }
  }

  // Getting tents from Tickets.js to then pass to the Basket.js
  function getTents() {
    // setTotalTent2(totalTent2);
    // setTotalTent3(totalTent3);
    setTent2Price(context.totalTent2 * 299);
    setTent3Price(context.totalTent3 * 399);
  }

  // Checking the availability and Total Price
  function checkAvailability() {
    if (ticketsQuantity > area1) {
      const svartheim = document.querySelector("#svartheim");
      svartheim.disabled = { status1 };
      setStatus1(true);
    }
    if (ticketsQuantity > area2) {
      const nilfheim = document.querySelector("#nilfheim");
      nilfheim.disabled = { status2 };
      setStatus2(true);
    }
    if (ticketsQuantity > area3) {
      const helheim = document.querySelector("#helheim");
      helheim.disabled = { status3 };
      setStatus3(true);
    }
    if (ticketsQuantity > area4) {
      const muspelheim = document.querySelector("#muspelheim");
      muspelheim.disabled = { status4 };
      setStatus4(true);
    }
    if (ticketsQuantity > area5) {
      const alfheim = document.querySelector("#alfheim");
      alfheim.disabled = { status5 };
      setStatus5(true);
    }
  }

  // function totalPriceBasket() {
  //   // setting subtotal price state
  //   setSubtotalPrice(context.cartVip.amount * context.cartVip.price + context.cartReg.amount * context.cartReg.price);
  //   // Setting total Price State
  //   setTotalPrice(context.cartVip.amount * context.cartVip.price + context.cartReg.amount * context.cartReg.price + fixedCampingPrice + greenPrice + tent2Price + tent3Price);
  // }

  // Define the accommodation
  function defineAcommodation(spot) {
    setAcommodation(spot);
    // console.log(spot);
  }

  return (
    <>
      <Pages
        areas={props.areas}
        spot={spot}
        // subtotalPrice={subtotalPrice}
        // totalPrice={totalPrice}
        fixedCampingPrice={fixedCampingPrice}
        greenPrice={greenPrice}
        green={green}
        updateGreen={updateGreen}
        getTents={getTents}
        // totalTent2={totalTent2}
        // totalTent3={totalTent3}
        tent2Price={tent2Price}
        tent3Price={tent3Price}
        checkAvailability={checkAvailability}
        defineAcommodation={defineAcommodation}
      ></Pages>

      <Basket
        areas={props.areas}
        spot={spot}
        // subtotalPrice={subtotalPrice}
        // totalPrice={totalPrice}
        fixedCampingPrice={fixedCampingPrice}
        greenPrice={greenPrice}
        green={green}
        // totalTent2={totalTent2}
        // totalTent3={totalTent3}
        tent2Price={tent2Price}
        tent3Price={tent3Price}
      />
    </>
  );
}

// Fetching areas from Available spots
export async function getStaticProps() {
  /* This function runs before the component bands is render
  - fetch the data
  - wait for that data
  - once we have the data, it put into the component
  - so the component can render with that data inside it  */
  const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  //const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { areas: data },
  };
}
