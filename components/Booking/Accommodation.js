import React, { useRef, useState, useEffect, useContext } from "react";
import ModalAcommodation from "../elements/ModalAcommodation";
import Context from "../Context";

export default function Accommodation(props) {
  const context = useContext(Context);

  // 1. Setting Spot from the input ratio
  function defineSpot(e) {
    const target = e.target.value;
    context.setSpot(target);
  }
  // 2. The Accommodation form has the reserveSpot as ref=""
  const reserveSpot = useRef();
  const ticketsQuantity = context.cartReg.amount + context.cartVip.amount;
  const spotReserved = context.spot;

  // 3. Submit the form when click the button "Reserve Spot"
  // And callback the reserveTicket() function with the payload argument
  async function submit(e) {
    e.preventDefault();
    reserveTicket({
      area: spotReserved,
      amount: ticketsQuantity,
    });
    // startTimer();
  }

  useEffect(() => {
    // let seconds = 30;
    function startTimer() {
      // context.setTime(300000);
      // console.log(typeof context.time);
      // context.setTime(seconds);
      const timer = document.getElementById("timerBasket");
      timer.innerHTML = context.time;
      timer.style.color = "turquoise";
      if (context.time == 0) {
        alert("Your time to complete the order is over!");
      } else {
        context.setTime(context.time--);
        console.log(context.time);
      }
    }
    setTimeout(startTimer(), 30);
  }, []);

  // console.log(spotReserved);
  // console.log(ticketsQuantity);
  // console.log(context.reserveID);
  console.log(context.reserveID.id);

  // 4. PUT reserve spot and get ID
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
      // .then((response) => context.setReserveID(response.id))
      .then((response) => context.setReserveID(response))

      .catch((err) => console.error(err));
  }

  // 5. timeout 300000

  return (
    <>
      <section id="accommodation">
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Accommodation</h1>
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
                    <input type="radio" id="svartheim" name="campingArea" value="Svartheim" className="radio-input" onClick={defineSpot}></input>
                  </div>

                  <div className="camping-area">
                    <label className="camping-areas-label" forhtml="campingArea">
                      <div className="green-1">Nilfheim</div>
                    </label>
                    <input type="radio" id="nilfheim" name="campingArea" value="Nilfheim" className="radio-input" onClick={defineSpot}></input>
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
                    <input type="radio" id="helheim" name="campingArea" value="Helheim" className="radio-input" onClick={defineSpot}></input>
                  </div>

                  <div className="camping-area">
                    <label className="camping-areas-label" forhtml="campingArea">
                      <div className="green-1">Muspelheim</div>
                    </label>
                    <input type="radio" id="muspelheim" name="campingArea" value="Muspelheim" className="radio-input" onClick={defineSpot}></input>
                  </div>

                  <div className="camping-area">
                    <label className="camping-areas-label" forhtml="campingArea">
                      <div className="green-1">Alfheim</div>
                    </label>
                    <input type="radio" id="alfheim" name="campingArea" value="Alfheim" className="radio-input" onClick={defineSpot}></input>
                  </div>
                </div>
                <button className="btn-main" type="submit">
                  Reserve Spot
                </button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
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

function displayAcommodation() {
  document.querySelector("#modal-acommodation").classList.remove("hiden");
}
function hideAcommodation() {
  document.querySelector("#modal-acommodation").classList.add("hiden");
}
export async function getStaticProps() {
  const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  //const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();

  return {
    props: { areas: data },
  };
}
