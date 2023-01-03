import React from "react";
import { useState, useEffect, useRef } from "react";
import Basket from "../../components/Booking/Basket";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
import { sendEtagResponse } from "next/dist/server/send-payload";

export default function TicketsPage(props) {
  const [cartReg, setCartReg] = useState([]);
  const [cartVip, setCartVip] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [totalReg, setTotalReg] = useState(0);
  const [totalVip, setTotalVip] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [subtotalPrice, setSubtotalPrice] = useState();
  const [spot, setAcommodation] = useState();
  const [green, setGreen] = useState();
  const [greenPrice, setGreenPrice] = useState();
  const [availables, setAvailables] = useState([]);
  const [totalTent2, setTotalTent2] = useState();
  const [totalTent3, setTotalTent3] = useState();

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const ticketsQuantity = cartReg.amount + cartVip.amount;
  const area1 = props.areas[0].available;
  const area2 = props.areas[1].available;
  const area3 = props.areas[2].available;
  const area4 = props.areas[3].available;
  const area5 = props.areas[4].available;

  // Fetching tickets from Supabase (Tickets table)
  useEffect(() => {
    async function getData() {
      const url = "https://udfchraccrfladlsvbzh.supabase.co/rest/v1/tickets";
      const headers = {
        "Content-Type": "application/jsonS",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Prefer: "return-representation",
      };
      const options = {
        method: "GET",
        headers: headers,
      };
      const body = {
        body: "false",
      };
      // Await then execute the code.
      const res = await fetch(url, options, body); // Fetchs the data (await)
      const tickets = await res.json(); //When it's done getting it
      // return data; // This returned tickets in an array - square brackets to define each one.
      setCartReg(tickets[0]);
      setCartVip(tickets[1]);
      setTickets(tickets);
    }
    getData();
  }, []);

  // Checking the availability
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
    // console.log(ticketsQuantity);
  }

  // Define the accommodation
  function defineAcommodation(spot) {
    setAcommodation(spot);
    // console.log(spot);
  }

  // 2 Parameters come from the callback function in RegTicket component
  function addRegToCart(cartReg, totalReg) {
    setTotalReg(totalReg);
    const amount = totalReg;
    if (cartReg.amount === 0) {
      setCartReg({ ...cartReg, amount: amount });
    }
    // setting subtotal price state
    setSubtotalPrice(totalVip * cartVip.price + totalReg * cartReg.price);
    // Setting total Price State
    setTotalPrice(totalVip * cartVip.price + totalReg * cartReg.price + fixedCampingPrice + greenPrice);
  }

  // 2 Parameters come from the callback function in VipTicket component
  function addVipToCart(cartVip, totalVip) {
    setTotalVip(totalVip);
    const amount = totalVip;
    if (cartVip.amount === 0) {
      setCartVip({ ...cartVip, amount: amount });
    }
    setSubtotalPrice(totalVip * cartVip.price + totalReg * cartReg.price);

    setTotalPrice(totalVip * cartVip.price + totalReg * cartReg.price + fixedCampingPrice);
  }

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
  function getTents(totalTent2, totalTent3) {
    // console.log(totalTent2);
    setTotalTent2(totalTent2);
    // console.log(totalTent3);
    setTotalTent3(totalTent3);
  }

  const regName = cartReg.displayname;
  const regAmount = cartReg.amount;
  const regPrice = cartReg.price;
  const vipName = cartVip.displayname;
  const vipAmount = cartVip.amount;
  const vipPrice = cartVip.price;
  const [reserveID, setReserveID] = useState({});
  const fixedCampingPrice = 99;

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <Ticket
            areas={props.areas}
            totalReg={totalReg}
            totalVip={totalVip}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            checkAvailability={checkAvailability}
            spot={spot}
            updateGreen={updateGreen}
            green={green}
            getTents={getTents}
          />

          <Acommodation
            areas={props.areas}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            totalReg={totalReg}
            spot={spot}
            defineAcommodation={defineAcommodation}
            totalVip={totalVip}
            subtotalPrice={subtotalPrice}
            totalPrice={totalPrice}
            setReserveID={setReserveID}
            reserveID={reserveID}
          />

          <Personal
            areas={props.areas}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            totalReg={totalReg}
            totalVip={totalVip}
            spot={spot}
            subtotalPrice={subtotalPrice}
            totalPrice={totalPrice}
            setReserveID={setReserveID}
            reserveID={reserveID}
          />

          <Payment
            areas={props.areas}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            totalReg={totalReg}
            totalVip={totalVip}
            checkAvailability={checkAvailability}
            spot={spot}
            defineAcommodation={defineAcommodation}
            subtotalPrice={subtotalPrice}
            totalPrice={totalPrice}
          />
        </div>

        <Basket
          areas={props.areas}
          cartReg={cartReg}
          regName={regName}
          regPrice={regPrice}
          regAmount={regAmount}
          vipName={vipName}
          vipPrice={vipPrice}
          vipAmount={vipAmount}
          cartVip={cartVip}
          addRegToCart={addRegToCart}
          addVipToCart={addVipToCart}
          spot={spot}
          subtotalPrice={subtotalPrice}
          totalReg={totalReg}
          totalVip={totalVip}
          totalPrice={totalPrice}
          fixedCampingPrice={fixedCampingPrice}
          greenPrice={greenPrice}
          green={green}
          totalTent2={totalTent2}
          totalTent3={totalTent3}
        />
      </section>
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
