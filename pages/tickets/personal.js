import React, { useContext } from "react";
import { useState, useRef } from "react";
import Owner from "../../components/Booking/Owner";
import Context from "../../components/Context";
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

export default function Personal(props) {
  const context = useContext(Context);

  const [showFormReg, setShowFormReg] = useState(false);
  const [showFormVip, setShowFormVip] = useState(false);
  const [showRegFormTitle, setShowRegFormTitle] = useState(false);
  const [showVipFormTitle, setShowVipFormTitle] = useState(false);

  function displayRegInfo() {
    let personalInfosReg = [];
    for (let i = 0; i < context.cartReg.amount; i++) {
      personalInfosReg.push(
        <Owner
          // chosenArea={props.chosenArea}
          index={i}
          key={i}
        />
      );
    }
    return personalInfosReg;
  }
  function displayVipInfo() {
    let personalInfosVip = [];
    for (let i = 0; i < context.cartVip.amount; i++) {
      personalInfosVip.push(
        <Owner
          // chosenArea={props.chosenArea}
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
        id: context.reserveID,
      }),
    });
    console.log(context.reserveID.id);
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
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Personal information</h1>
              <p className="text-center">Enter your personal information</p>
              <p className="text-center">Note! The information provided is how we can identify you as ticket owner so make sure it is the same as on your ID!</p>
            </div>
            <div className="owners-container">
              <div className="personal-form">
                <div className="regular-container small">
                  {!showFormReg && context.cartReg.amount > 0 && (
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
                  {!showFormVip && context.cartVip.amount > 0 && (
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
