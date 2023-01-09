import Link from "next/link";
import Regtickets from "./Regticket";
import Viptickets from "./Vipticket";
import { useState, useRef, useContext } from "react";
import Context from "../Context";

export default function Tickets(props) {
  // ********** Getting the quantity of tents from the forms *********** //
  const context = useContext(Context);
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();

  function check() {
    const tents = document.getElementById("tents-container");
    if (document.getElementById("check-rent-tent").value != "") {
      document.getElementById("tent2-quantity").disabled = false;
      document.getElementById("tent3-quantity").disabled = false;
      tents.style.display = "flex";
    } else {
      document.getElementById("tent2-quantity").disabled = true;
      document.getElementById("tent3-quantity").disabled = true;
      tents.style.display = "none";
    }
    if (document.getElementById("check-rent-tent").checked === false) {
      tents.style.display = "none";
    }
  }

  // Define totalReg when onClick in Choose amount
  function setTentsQuantities() {
    context.setTotalTent2(total2);
    console.log(context.totalTent2);
    context.setTotalTent3(total3);
    console.log(context.totalTent3);
  }

  function displayQuantityTent2(e) {
    context.setTotalTent2(parseInt(e.target.value, 10));
    const quantity = document.querySelector(".tent2");
    const tents = document.querySelector("#tent2-quantity");
    quantity.textContent = tents.value + "x";
    // quantity.classList.add("turquoise");
    // Calculating the total
    const total = tents.value * 299;
    document.querySelector(".totalTent2").textContent = "DKK " + total;
    // document.querySelector(".totalTent2").classList.add("turquoise");
    setTotal2(parseInt(tents.value, 10));
    props.getTents();
  }

  function displayQuantityTent3(e) {
    context.setTotalTent3(parseInt(e.target.value, 10));
    const quantity = document.querySelector(".tent3");
    const tents = document.querySelector("#tent3-quantity");
    quantity.textContent = tents.value + "x";
    // quantity.classList.add("turquoise");
    // Calculating the total
    const total = tents.value * 399;
    document.querySelector(".totalTent3").textContent = "DKK " + total;
    // document.querySelector(".totalTent3").classList.add("turquoise");
    setTotal3(parseInt(tents.value, 10));
    props.getTents();
  }

  sendTentsBack();
  function sendTentsBack() {
    // props.getTents(totalTent2, totalTent3);
    // console.log(totalTent2);
    // console.log(totalTent3);
  }

  // ********** Defining the Atttribute Max for tents *********** //

  const [maxReg, setMaxReg] = useState(undefined);
  const [maxVip, setMaxVip] = useState(undefined);
  const ticketsQuantity = context.totalReg + context.totalVip;
  // console.log(ticketsQuantity);

  function tentsForTickets() {
    if (ticketsQuantity >= 0) {
      setMaxReg(0);
      setMaxVip(0);
    }
    if (ticketsQuantity >= 2) {
      setMaxReg(1);
      setMaxVip(1);
    }
    if (ticketsQuantity >= 6) {
      setMaxReg(2);
      setMaxVip(2);
    }
    if (ticketsQuantity >= 11) {
      setMaxReg(3);
      setMaxVip(3);
    }
    if (ticketsQuantity >= 16) {
      setMaxReg(4);
      setMaxVip(4);
    }
  }

  function greenCamping() {
    // function to add the green camping price to total price
    const greenCheck = document.querySelector("#check-green-camping");
    if (greenCheck.checked == true) {
      const greenYes = (greenCheck.value = "Yes");
      props.updateGreen(greenYes);
    } else {
      const greenNo = (greenCheck.value = "No");
      props.updateGreen(greenNo);
    }
  }

  return (
    <>
      {/* Tickets */}
      <section id="tickets">
        {/* <div className="container-page"> */}
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Tickets</h1>
            <p className="text-center">Note! The limit per purchase is 9 tickets!</p>
          </div>
          <div className="tickets-container">
            <Regtickets
              // key={props.cartReg.id}
              // cartReg={props.cartReg}
              // regTicketsQuantityCount={props.regTicketsQuantityCount}
              // addRegToCart={props.addRegToCart}
              tentsForTickets={tentsForTickets}
            />
            <Viptickets
              // key={props.cartVip.id}
              // cartVip={props.cartVip}
              // vipTicketsQuantityCount={props.vipTicketsQuantityCount}
              // addVipToCart={props.addVipToCart}
              tentsForTickets={tentsForTickets}
            />
          </div>
          <div></div>
          <div className="personal-camping-options">
            <div className="spot-container">
              <div>
                <h3 className="pink"> Fixed booking fee</h3>
                <p>This fee is only once per purchase, no matter how many spots you are booking!</p>
                <p className="fee-aside">99,- DKK</p>
              </div>
            </div>
            <diV className="personal-green-camping">
              <input type="checkbox" name="check-green-camping" id="check-green-camping" value="Yes" onClick={greenCamping}></input>
              <label htmlFor="check-green-camping"></label>
              <div>
                <h3 className="pink">Green Camping</h3>
                <p>If being evironmentally conscious is close to your heart choose our green camping offer.</p>
                <p className="fee-aside">249,- DKK</p>
              </div>
            </diV>

            <div className="personal-rent">
              <input type="checkbox" name="check-rent-tent" id="check-rent-tent" onClick={check}></input>
              <label htmlFor="check-rent-tent"></label>
              <div>
                <h3 className="pink">Rent a tent and get it all set up by the staff</h3>
              </div>
            </div>

            <div id="tents-container" className="tents-container hidden">
              <form>
                <label htmlFor="tents-quantity"></label>
                <h3 className="pink">Tent (2 persons) 299,- DKK</h3>
                <div className="flex-row-space-around">
                  <input type="number" name="tents-quantity" id="tent2-quantity" min="0" max={maxReg} placeholder="0" disabled className="input-number-tents" onChange={displayQuantityTent2}></input>
                  <h3 className="tent2 turquoise">0x</h3>
                  <h3 className="white">299,- DKK</h3>
                  <h3 className="white">Total:</h3>
                  <h3 className="totalTent2 turquoise">0</h3>
                </div>
              </form>
              <form>
                <label htmlFor="tents-quantity"></label>
                <h3 className="pink">Tent (3 persons) 399,- DKK</h3>
                <div className="flex-row-space-around">
                  <input type="number" name="tents-quantity" id="tent3-quantity" min="0" max={maxVip} placeholder="0" disabled className="input-number-tents" onChange={displayQuantityTent3}></input>
                  <h3 className="tent3 turquoise">0x</h3>
                  <h3 className="white">399,- DKK</h3>
                  <h3 className="white">Total:</h3>
                  <h3 className="totalTent3 turquoise">0</h3>
                </div>
              </form>
            </div>
            <button className="btn-main" onClick={setTentsQuantities}>
              Choose Tents
            </button>
            <button
              className="btn-main"
              onClick={() => {
                props.checkAvailability();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* </div> */}
      </section>
    </>
  );
}
