import React, { useContext } from "react";
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { useState, useRef } from "react";
import Owner from "./Owner";
// import Basket from "../../components/Booking/Basket";
// import "react-accessible-accordion/dist/fancy-example.css";

export default function Personal(props) {
  const [showFormReg, setShowFormReg] = useState(false);
  const [showFormVip, setShowFormVip] = useState(false);
  const [showRegFormTitle, setShowRegFormTitle] = useState(false);
  const [showVipFormTitle, setShowVipFormTitle] = useState(false);
  function displayRegInfo() {
    let personalInfosReg = [];
    for (let i = 0; i < props.cartReg.amount; i++) {
      personalInfosReg.push(
        <Owner
          areas={props.areas}
          cartReg={props.cartReg}
          cartVip={props.cartVip}
          addRegToCart={props.addRegToCart}
          addVipToCart={props.addVipToCart}
          ticketsQuantity={props.ticketsQuantity}
          spot={props.spot}
          totalPrice={props.totalPrice}
          subtotalPrice={props.subtotalPrice}
          totalReg={props.totalReg}
          totalVip={props.totalVip}
          chosenArea={props.chosenArea}
          index={i}
          key={i}
        />
      );
    }
    return personalInfosReg;
  }
  function displayVipInfo() {
    let personalInfosVip = [];
    for (let i = 0; i < props.cartVip.amount; i++) {
      personalInfosVip.push(
        <Owner
          areas={props.areas}
          cartReg={props.cartReg}
          cartVip={props.cartVip}
          addRegToCart={props.addRegToCart}
          addVipToCart={props.addVipToCart}
          ticketsQuantity={props.ticketsQuantity}
          spot={props.spot}
          totalPrice={props.totalPrice}
          subtotalPrice={props.subtotalPrice}
          totalReg={props.totalReg}
          totalVip={props.totalVip}
          chosenArea={props.chosenArea}
          index={i}
          key={i}
        />
      );
    }
    return personalInfosVip;
  }
  const fullfillres = useRef();
  async function fullfillReservation() {
    const url = "https://bitter-moon-5524.fly.dev";
    const res = await fetch(url + "/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.reserveID,
      }),
    });
    console.log(props.reserveID.id);
    return await res.json();
  }
  async function submit(e) {
    e.preventDefault();
    fullfillReservation();
  }
  // export async function insertOrder(payload) {
  //   const key =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE";
  //   const url = "https://xzvxbsabbtvyjadarzzt.supabase.co";
  //   const res = await fetch(url + "/rest/v1/simpleshop", {
  //     method: "POST",
  //     headers: {
  //       apikey:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE",
  //       Prefer: "return=representation",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   });
  //   return await res.json();
  // }

  return (
    <>
      <section id="personal">
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Personal information</h1>
            <p className="text-center">Enter your personal information</p>
            <p className="text-center">
              Note! The information provided is how we can identify you as ticket owner so make sure it is the same as
              on your ID!
            </p>
          </div>
          <div className="owners-container">
            <div className="personal-form">
              <div className="regular-container small">
                {!showFormReg && props.cartReg.amount > 0 && (
                  <button onClick={() => setShowFormReg(true)} className="btn-main">
                    Regular pass(es)
                  </button>
                )}
                {showFormReg && (
                  <form ref={fullfillres} onSubmit={submit} className="personal-form-reg">
                    {displayRegInfo()}{" "}
                    <button className="btn-main" type="submit">
                      Submit
                    </button>
                  </form>
                )}
              </div>
              <div className="vip-container small">
                {!showFormVip && props.cartVip.amount > 0 && (
                  <button onClick={() => setShowFormVip(true)} className="btn-main">
                    VIP pass(es)
                  </button>
                )}
                {showFormVip && (
                  <form ref={fullfillres} onSubmit={submit} className="personal-form-vip">
                    {displayVipInfo()}
                    <button className="btn-main" type="submit">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </section>
    </>
  );
}

// let setUpPrice
// let tentSize = ""

// function step2(props) {
//   // const ticketAmount = amount of requested tickets from previous step
//   const tickets = props.totalTickets;
//   // Optional, pay to have the crew set up X tents for you.
// // 2 person tent (including the tent) 299,-
// // 3 person tent (including the tent) 399,-
// // The number of tents must match the number of people in the group (number of tickets).
// if (tickets <= 2) {
//   setUpPrice = 299
//   tentSize = "2-person tent"
// } else if (tickets === 3) {
//   setUpPrice = 399
//   tentSize = "3-person tent"
// } else if (tickets === 4) {
//   setUpPrice = 598
//   tentSize = "2 x 2-person tents"
// } else if (tickets === 5) {
//   setUpPrice = 798;
//   tentSize = "1 x 2 person tent & 1 x 3 person tent"
// } else {
//   setUpPrice = 299;
//   tentSize = "2-person tent"
// }
