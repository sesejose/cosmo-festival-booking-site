import { useState, useEffect } from "react";
import Head from "next/head";
import Herosection from "../components/elements/Herosection";
import Lineup from "../components/elements/Lineup";
import Ticketsmain from "../components/elements/Ticketsmain";
import Accomodationsection from "../components/elements/Accomodationsection";
import Days from "../components/elements/Days";
import Basket from "../components/Booking/Basket";

export default function Home({ areas, schedule, bands }) {
  const [filter, setFilter] = useState("mon");
  const [cartReg, setCartReg] = useState([]);
  const [cartVip, setCartVip] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [totalReg, setTotalReg] = useState(0);
  const [totalVip, setTotalVip] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [availables, setAvailables] = useState([]);
  // const [spot, setSpot] = useState();

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
      setTotalReg([0]);
      setTotalVip([0]);
      setTotalPrice([0]);
    }
    getData();
  }, []);

  // Fetching areas from Available spots
  // useEffect(() => {
  //   async function getData() {
  //     // const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  //     const res = await fetch("http://localhost:8080/available-spots");
  //     const data = await res.json();
  //     setAvailables(data);
  //     setSpot("Svartheim");
  //     // console.log(data);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <Head>
        <title>The Festival | Home</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, music, exam, reactjs, nextjs"></meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <div className="container-page">
        <Herosection />
        <Days setFilter={setFilter} />
        <Lineup bands={bands} schedule={schedule} filter={filter} />
        <Ticketsmain />
        <Accomodationsection />
      </div>
      <Basket></Basket>
    </>
  );
}
export async function getServerSideProps() {
  const [scheduleRes, bandsRes, areasRes] = await Promise.all([
    fetch(`https://bitter-moon-5524.fly.dev/schedule`),
    //fetch("http://localhost:8080/schedule"),

    fetch(`https://bitter-moon-5524.fly.dev/bands`),
    //fetch("http://localhost:8080/bands"),

    fetch(`https://bitter-moon-5524.fly.dev/available-spots`),
    //fetch("http://localhost:8080/available-spots"),
  ]);

  const [schedule, bands, areas] = await Promise.all([scheduleRes.json(), bandsRes.json(), areasRes.json()]);

  return { props: { schedule, bands, areas } };
}
