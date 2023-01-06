import { useState } from "react";
import Context from "../components/Context";
import Layout from "../components/Layout";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState("default");
  //Tickets
  const [cartReg, setCartReg] = useState([]);
  const [cartVip, setCartVip] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [totalReg, setTotalReg] = useState(0);
  const [totalVip, setTotalVip] = useState(0);
  // Green
  const [green, setGreen] = useState();
  const [greenPrice, setGreenPrice] = useState();
  const [availables, setAvailables] = useState([]);
  // Tents
  const [totalTent2, setTotalTent2] = useState();
  const [totalTent3, setTotalTent3] = useState();
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
  const ticketsQuantity = cartReg.amount + cartVip.amount;
  const [subtotalPrice, setSubtotalPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();
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
    // Set tent 2 price
    setTent2Price(totalTent2 * 299);
    setTent3Price(totalTent3 * 399);
    // console.log(tent2Price);
    // console.log(tent3Price);
  }

  // 2 Parameters come from the callback function in RegTicket component
  function addRegToCart(cartReg, totalReg) {
    setTotalReg(totalReg);
    const amount = totalReg;
    if (cartReg.amount === 0) {
      setCartReg({ ...cartReg, amount: amount });
    }
  }

  // 2 Parameters come from the callback function in VipTicket component
  function addVipToCart(cartVip, totalVip) {
    setTotalVip(totalVip);
    const amount = totalVip;
    if (cartVip.amount === 0) {
      setCartVip({ ...cartVip, amount: amount });
    }
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
    // setting subtotal price state
    setSubtotalPrice(totalVip * cartVip.price + totalReg * cartReg.price);
    // Setting total Price State
    setTotalPrice(totalVip * cartVip.price + totalReg * cartReg.price + fixedCampingPrice + greenPrice + tent2Price + tent3Price);
  }

  // Define the accommodation
  function defineAcommodation(spot) {
    setAcommodation(spot);
    // console.log(spot);
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
    <Context.Provider value={{ state, setState }}>
      <Layout
        areas={props.areas}
        cartReg={cartReg}
        regName={regName}
        regPrice={regPrice}
        regAmount={regAmount}
        cartVip={cartVip}
        vipName={vipName}
        vipPrice={vipPrice}
        vipAmount={vipAmount}
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
        updateGreen={updateGreen}
        getTents={getTents}
        totalTent2={totalTent2}
        totalTent3={totalTent3}
        tent2Price={tent2Price}
        tent3Price={tent3Price}
        checkAvailability={checkAvailability}
        defineAcommodation={defineAcommodation}
      >
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}
export default MyApp;

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

// {
//   "id": 3,
//   "created_at": "2022-10-24T09:01:22.863572+00:00",
//   "ticket": "Regular",
//   "acommodation": "Svartheim",
//   "fullname": "The NEXT generation",
//   "email": "hello@mail.com",
//   "age": 22,
//   "cpr": 12345678,
//   "green": true,
//   "spot": true,
//   "tent2": 2,
//   "tent3": 1
//   }

// all the endpoints
// http://localhost:8080/available-spots
// http://localhost:8080/schedule
// http://localhost:8080/bands
// http://localhost:8080/reserve-spot
// http://localhost:8080/fullfill-reservation
// http://localhost:8080/settings
