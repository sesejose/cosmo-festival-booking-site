import React, { useRef, useState } from "react";
// import Basket from "../../components/Booking/Basket";
import ModalAcommodation from "../../components/elements/ModalAcommodation";
import { useEffect } from "react";

export default function Acommodation(props) {
  // First define the state
  // console.log(response);
  // // We do something with the response returned from insertOrder().
  // if (response && response.length) {
  //   // If response is not null AND has a length asumme that is an array (How??)
  //   setPaymentCompleted(true);
  //   // 14. Now we have a variable that we can use in our UI.
  function newFunction(e) {
    const spot = e.target.value;
    props.defineAcommodation(spot);
    // console.log(spot);
  }
  const reserveSpot = useRef();

  const ticketsQuantity = props.cartReg.amount + props.cartVip.amount;
  const spotReserved = props.spot;
  // console.log(spotReserved);

  // Then update / add it to the cart
  function reserveTicket(payload) {
    fetch("https://bitter-moon-5524.fly.dev/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      // .then((response) => console.log(response))
      .then((response) => props.setReserveID(response.id))

      .catch((err) => console.error(err));
  }
  // timeout 300000
  // console.log(reserveTicket);
  async function submit(e) {
    e.preventDefault();
    reserveTicket({
      area: spotReserved,
      amount: ticketsQuantity,
    });
  }
  // console.log(props.reserveID);
  return (
    <>
      <section id="acommodation">
        {/* <div className="container-page"> */}
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Acommodation</h1>
            <p className="text-center">Select the area in the camping where you wanna set your tent/s.</p>
            <button className="btn-acommodation" onClick={displayAcommodation}>
              Learn more here
            </button>
          </div>
          <div className="map-container">
            <div className="camping-areas-row">
              <h3 className="purple">Stages area</h3>
            </div>
            <div className="map-stages-container">
              <div className="map-stage">
                <h4 className="purple">MIDGARD</h4>
              </div>
              <div className="map-stage">
                <h4 className="purple">VANAHEIM</h4>
              </div>
              <div className="map-stage">
                <h4 className="purple">JOTUNHEIM</h4>
              </div>
            </div>
            <form onSubmit={submit} ref={reserveSpot} className="camping-areas-container">
              <div className="camping-areas-row">
                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="campingArea">
                    <div className="green-1">Svartheim</div>
                  </label>
                  <input type="radio" id="svartheim" name="campingArea" value="Svartheim" className="radio-input" onClick={newFunction}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="campingArea">
                    <div className="green-1">Nilfheim</div>
                  </label>
                  <input type="radio" id="nilfheim" name="campingArea" value="Nilfheim" className="radio-input" onClick={newFunction}></input>
                </div>
              </div>

              <div className="camping-areas-row">
                <h3 className="green-1">Camping area</h3>
              </div>

              <div className="camping-areas-row">
                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="campingArea">
                    <div className="green-1">Helheim</div>
                  </label>
                  <input type="radio" id="helheim" name="campingArea" value="Helheim" className="radio-input" onClick={newFunction}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="campingArea">
                    <div className="green-1">Muspelheim</div>
                  </label>
                  <input type="radio" id="muspelheim" name="campingArea" value="Muspelheim" className="radio-input" onClick={newFunction}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="campingArea">
                    <div className="green-1">Alfheim</div>
                  </label>
                  <input type="radio" id="alfheim" name="campingArea" value="Alfheim" className="radio-input" onClick={newFunction}></input>
                </div>
              </div>
            </form>
            <button className="btn-main">Choose accommodation</button>
          </div>
          <div></div>
        </div>
        {/* </div> */}
      </section>

      {/* <!-- Modal acommodation  --> */}

      <div id="modal-acommodation" className="hiden">
        <div className="modal-acommodation">
          <div className="close-modal" onClick={hideAcommodation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>

          <div className="modal-container">
            <ModalAcommodation></ModalAcommodation>
          </div>
        </div>
      </div>
    </>
  );
}

///////////////////////////////////////

function displayAcommodation() {
  document.querySelector("#modal-acommodation").classList.remove("hiden");
}
function hideAcommodation() {
  document.querySelector("#modal-acommodation").classList.add("hiden");
}
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
