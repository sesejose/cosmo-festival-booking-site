import { useState } from "react";
import Context from "../components/Context";
import Layout from "../components/Layout";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState("default");
  return (
    <Context.Provider value={{ state, setState }}>
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
