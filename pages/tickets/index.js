import React, { useRef } from "react";
import Tickets from "../../components/Booking/Tickets";
import Acommodation from "../../components/Booking/Accommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
import Context from "../../components/Context";
import { useContext } from "react";
// Routing
// import ReactDOM from "react-dom";
import { ReactDOM } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anchor from "../../components/Anchor";
import Link from "next/link";

function Pages(props) {
  const context = useContext(Context);
  const ticketsRef = useRef();
  const accommodationRef = useRef();
  const personalRef = useRef();
  const paymentRef = useRef();
  const thanksRef = useRef();

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <ul className="flex-row-space-around">
            <Link className="btn-pink" href="#tickets">
              Tickets
            </Link>
            <Link className="btn-pink" href="#acommodation">
              Accommodation
            </Link>
            <Link className="btn-pink" href="#personal">
              Personal
            </Link>
            <Link className="btn-pink" href="#payment">
              Payment
            </Link>
            <Link className="btn-pink" href="#thanks">
              Thanks
            </Link>
          </ul>
          <ul>
            <li>
              {/* <Anchor to="/tickets/tickets">Tickets</Anchor> */}
              <Tickets ref={ticketsRef} />
            </li>
            <li>
              {/* <Anchor to="/tickets/accommodation">Accommodation</Anchor> */}
              <Acommodation ref={accommodationRef} />
            </li>
            <li>
              {/* <Anchor to="/tickets/personal">Personal information</Anchor> */}
              <Personal ref={personalRef} />
            </li>
            <li>
              {/* <Anchor to="/tickets/payment">Payment method</Anchor> */}
              <Payment ref={paymentRef} />
            </li>
            <li>
              {/* <Anchor to="/tickets/thanks">Thanks</Anchor> */}
              <Thanks ref={thanksRef} />
            </li>
          </ul>

          {/* <hr className="divider"></hr> */}
        </div>
      </section>
    </>
  );
}

export default Pages;

// ReactDOM.render(
//   <BrowserRouter>
//     <Pages></Pages>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
