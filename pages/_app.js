import Layout from "../components/Layout";
// import "../styles/globals.css";
import "../styles/style.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component
        {...pageProps}
        // bookingInfo={bookingInfo}
        // setBookingInfo={setBookingInfo}
        // setallTickets={setallTickets}
        // setAccomodation={setAccomodation}
        // setExtras={setExtras}
      />
    </Layout>
  );
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
export default MyApp;

// all the endpoints
// http://localhost:8080/available-spots
// http://localhost:8080/schedule
// http://localhost:8080/bands
// http://localhost:8080/reserve-spot
// http://localhost:8080/fullfill-reservation
// http://localhost:8080/settings
