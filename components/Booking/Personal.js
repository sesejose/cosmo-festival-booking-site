import React, { useContext } from "react";
import { useState, useRef } from "react";
import Owner from "./Owner";
import Context from "../Context";
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
          ownerRef={ownerRef}
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
          ownerRef={ownerRef}
          index={i}
          key={i}
        />
      );
    }
    return personalInfosVip;
  }

  // 1. Submit the form and call back the setUser function
  // 2. Then move to payment --> Callback the function that enables Go to Checkout
  async function submit(e) {
    e.preventDefault();
    settingUsersPersonalInfo();
    // Setting users State
    console.log("submit works");
  }

  //Setting USERS --> Called back from submit()
  const postOrder = useRef(null);
  const ownerRef = useRef();
  function settingUsersPersonalInfo() {
    context.setUsers([
      {
        name: ownerRef.current.elements.name.value,
        email: ownerRef.current.elements.email.value,
      },
    ]);
    console.log(context.users);
    console.log("Setting users works");
  }

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
                    <form onSubmit={submit} className="personal-form-reg">
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
                    <form onSubmit={submit} className="personal-form-vip">
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
