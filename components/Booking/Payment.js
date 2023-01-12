import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { insertOrder } from "./Db";
import Context from "../Context";
import Thanks from "./Thanks";
// import Basket from "../../components/Booking/Basket";

export default function Payment(props) {
  const context = useContext(Context);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  // Momentjs
  const moment = require("moment");
  const a = moment().toString();
  console.log(a);
  /* Here the POST with the object as example from Insomnia

{
  "id": 4,
  "created_at": "2022-10-24T09:01:22.863572+00:00",
  "ticket": "Regular",
  "acommodation": "Svartheim",
  "fullname": "The NEXT generation",
  "email": "hello@mail.com",
  "age": 22,
  "cpr": 12345678,
  "green": true,
  "tent2": 2,
  "tent3": 1,
  "timeout": false,
  "tickets_amount": "5"
  }

*/

  // 1. Submit the form and call back the fullfillReservation
  // That will POST the id.
  // Calllback the function that post the order tas well.
  async function submit(e) {
    e.preventDefault();
    fullfillReservation();
    postOrderSupabase();
  }

  // 2. POST to reserve with the ID
  const fullfillres = useRef();
  async function fullfillReservation() {
    const url = "https://bitter-moon-5524.fly.dev";
    const res = await fetch(url + "/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: context.reserveID.id,
      }),
    });
    // console.log(context.reserveID.id);
    return await res.json();
  }

  // Post ORDER in supabase after pay !
  // The Object to post is the payload / Argument of the insertOrder() function in Db.js
  async function postOrderSupabase() {
    const response = await insertOrder({
      id: context.orderId,
      reg_tickets: context.cartReg.amount,
      vip_tickets: context.cartReg.amount,
      accommodation: context.spot,
      green: context.green,
      tent2pers: context.totalTent2,
      tent3pers: context.totalTent3,
      users: [],
    });
    console.log(response);
    if (response && response.length) {
      setPaymentCompleted(true);
      console.log("Works!");
    }
  }

  // Changing focus() from CreditCard
  useEffect(() => {
    async function creditCard() {
      //creditCard.elements.card.blur(); // It's does not necessary. With the next line it becomes automaticlaly blured
      const creditCard = document.getElementById("myform");
      console.log(creditCard);

      creditCard.elements.card.addEventListener("input", () => {
        if (creditCard.elements.card.value.length === 16) {
          // console.log("16 reached");
          creditCard.elements.code.focus();
        }
      });

      creditCard.elements.code.addEventListener("input", () => {
        if (creditCard.elements.code.value.length === 3) {
          console.log("2 reached");
          creditCard.elements.date.focus();
        }
      });
    }
    creditCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function errorMessage() {
    const errorCard = document.querySelector(".error-card-message");
    const errorName = document.querySelector(".error-name-message");
    const errorCode = document.querySelector(".error-code-message");
    const errorDate = document.querySelector(".error-date-message");
    const date = document.getElementById("date");
    //Card
    if (isNaN(document.getElementById("card").value)) {
      errorCard.style.display = "flex";
    }
    //Name
    if (document.getElementById("name").length < 3) {
      errorName.style.display = "flex";
    }
    //Code
    if (isNaN(document.getElementById("code").value)) {
      errorCode.style.display = "flex";
    }
    //Date
    if (moment(document.getElementById("date").value)) {
      errorCode.style.display = "flex";
    }

    //Date
    // if (date.value == "" || dateText.value == "") {
    //   console.log("* is required");
    // } else {
    //   console.log("Dates filled.");
    //   e.preventDefault();
    // }
    // if (isDate(dateText.value) && !dateText.value.match("/^d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/")) {
    //   console.log("* invalid date, required format yyyy-mm-dd");
    //   e.preventDefault();
    // } else {
    //   console.log("Correct Date");
    //   console.log(error.textContent);
    // }
  }

  return (
    <>
      {/* 15. Ternary operator */}
      {paymentCompleted ? (
        // <Thanks />
        <div>
          <h1 className="turquoise">Congratulations!</h1>
          <h3>Your order is complete!</h3>
          <p>You will be receiving a confirmation email with order details.</p>
        </div>
      ) : (
        <section id="payment">
          <div className="container-page">
            <form ref={fullfillres} onSubmit={submit} id="myform">
              <div className="wrapper-forms">
                <div className="forms-intro-text">
                  <h1 className="turquoise text-center">Pay with Credit Card</h1>
                  <p className="text-center">Set you credit card</p>
                </div>
                <div className="credit-card-container">
                  <div className="form-group">
                    <div className="field-group">
                      <div className="field">
                        <label htmlFor="cards">Credit card</label>
                        <select name="cards" id="cards" placeholder="VISA / DANKORT" className="input-text" required autoFocus>
                          <option value="visa">VISA / DANKORT</option>
                          <option value="master">MASTERCARD</option>
                          <option value="american">AMERICAN EXPRESS</option>
                          <option value="other">OTHER</option>
                        </select>
                        <span className="error-cards-message">Enter a valid value</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="field-group">
                        <div className="field">
                          <label htmlFor="name">Full name</label>
                          <input type="text" name="name" id="name" placeholder="Insert your full name" minLength="4" className="input-text" required />
                          <span className="error-name-message">Enter a valid value</span>
                        </div>
                        <div className="field">
                          <label htmlFor="card">Card number</label>
                          <input type="text" name="card" id="card" placeholder="Insert card number" minLength="16" size="16" className="input-text" required />
                          <span className="error-card-message">Enter a valid value</span>
                        </div>
                      </div>
                      <div className="field-group">
                        <div className="field">
                          <label htmlFor="code">Check digits</label>
                          <input type="text" name="code" id="code" placeholder="Insert card check digits" minLength="3" maxLength="3" className="input-text" required />
                          <span className="error-code-message">Enter a valid value</span>
                        </div>
                        <div className="field">
                          <label htmlFor="date">Expiration date</label>
                          <input type="date" name="date" id="date" placeholder="Insert expiration date" className="input-text" required />
                          <span className="error-date-message">Enter a valid value</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-main" type="submit" onClick={errorMessage}>
                    PAY
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

// 1. First we tell the form on submit call the isertOrder() function
// 2. We define that function in a new file. Db.js in modules.
// 3. insertOrder() fetch the data from the database and indicates the method 'POST'
// 4. Then we need to grab the form and for that we use { useRef }
// 5. In the tag form we add the atribute ref={}
// 6. Then we create a new variable (const theForm) for that at the begining of the CheckoutForm function.
// 7. That variable is === to a function useRef()
// 8. Now the <form> and the const theForm are now conected.
// 9. We have now access to the DOM element with .current theForm.current.elements.name.value
