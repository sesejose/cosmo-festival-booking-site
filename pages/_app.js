import { useState, useEffect, createContext } from "react";
import Context from "../components/Context";
import Layout from "../components/Layout";
import Basket from "../components/Booking/Basket";
import "../styles/style.css";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

function MyApp({ Component, pageProps }) {
  // const [state, setState] = useState("default");
  const [areas, setAreas] = useState([]);
  //Tickets
  const [cartReg, setCartReg] = useState([]);
  const [cartVip, setCartVip] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [totalReg, setTotalReg] = useState();
  const [totalVip, setTotalVip] = useState();
  // Green
  const [green, setGreen] = useState();
  const [greenPrice, setGreenPrice] = useState();
  // Tents
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();
  const [totalTent2, setTotalTent2] = useState();
  const [totalTent3, setTotalTent3] = useState();
  const [tent2Price, setTent2Price] = useState();
  const [tent3Price, setTent3Price] = useState();
  // Accommodation
  const [spot, setSpot] = useState();
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const [area1, setArea1] = useState(areas[0]);
  const [area2, setArea2] = useState(areas[1]);
  const [area3, setArea3] = useState(areas[2]);
  const [area4, setArea4] = useState(areas[3]);
  const [area5, setArea5] = useState(areas[4]);
  // Camprops.
  const [reserveID, setReserveID] = useState({});
  const [fixedCampingPrice, setFixedCampingPrice] = useState(99);

  // Define the Accommodation Spot
  function defineAcommodation(spot) {
    setSpot(spot);
    // console.log(spot);
  }

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

  // Fetching areas from Available spots
  // Next.js will pre-render this page
  useEffect(() => {
    async function getAreas() {
      /* This function runs before the component bands is render */
      const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
      //const res = await fetch("http://localhost:8080/available-spots");
      const areas = await res.json();
      // will be passed to the page component as props
      // return areas;
      setAreas(areas);
    }
    getAreas();
  }, []);

  return (
    <Context.Provider
      value={{
        tickets,
        cartReg,
        setCartReg,
        totalReg,
        setTotalReg,
        cartVip,
        setCartVip,
        totalVip,
        setTotalVip,
        green,
        setGreen,
        greenPrice,
        setGreenPrice,
        fixedCampingPrice,
        setFixedCampingPrice,
        total2,
        setTotal2,
        total3,
        setTotal3,
        totalTent2,
        setTotalTent2,
        totalTent3,
        setTotalTent3,
        tent2Price,
        setTent2Price,
        tent3Price,
        setTent3Price,
        status1,
        setStatus1,
        status2,
        setStatus2,
        status3,
        setStatus3,
        status4,
        setStatus4,
        status5,
        setStatus5,
        area1,
        area2,
        area3,
        area4,
        area5,
      }}
    >
      <Layout>
        <Component {...pageProps} />
        <Basket />
      </Layout>
    </Context.Provider>
  );
}
export default MyApp;

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
