import { useState, useEffect, createContext } from "react";
import Context from "../components/Context";
import Layout from "../components/Layout";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState("default");
  //Tickets
  const [cartReg, setCartReg] = useState([]);
  const [cartVip, setCartVip] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [totalReg, setTotalReg] = useState();
  const [totalVip, setTotalVip] = useState();
  // Tents
  const [totalTent2, setTotalTent2] = useState();
  const [totalTent3, setTotalTent3] = useState();

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

  return (
    <Context.Provider value={{ state, setState, cartReg, setCartReg, totalReg, setTotalReg, cartVip, setCartVip, totalVip, setTotalVip, totalTent2, setTotalTent2, totalTent3, setTotalTent3 }}>
      <Layout>
        <Component {...pageProps} />
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
