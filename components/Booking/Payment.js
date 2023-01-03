import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { insertOrder } from "./Db";
import Thanks from "./Thanks";
// import Basket from "../../components/Booking/Basket";

export default function Payment(props) {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  // const [ages, setAges] = useState();
  /* Here the POST with the object as example from Insomnia

The form should be the same.

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
  "spot": true,
  "tent2": 2,
  "tent3": 1,
  "timeout": false,
  "tickets_amount": "5"
  }

*/
  console.log(props.reserveID);

  const postOrder = useRef(null);
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      id: props.reserveID,
      reg_tickets: props.cartReg.amount, // This is the totalReg
      vip_tickets: props.cartReg.amount, // This i sthe totalVip
      accommodation: props.spot, // This is the props.spot
      green: true, // this is a new State
      spot: true, // This is a new state
      tent_2: 0, // This is a new State (number)
      tent_3: 0, // This is a new State (number)
      fullnames: [], // This is a new State (Array)
      emails: [], // This is a new State (Array)
      ages: [], // This is a new State (Array)
      IDs: [], // This is a new State (Array)
    });
    console.log(response);
    if (response && response.length) {
      setPaymentCompleted(true);
      console.log("Works!");
    }
  }

  return (
    <>
      {/* 15. Ternary operator
      {paymentCompleted ? (
      <Thanks />;
      ) : ( */}
      <section id="payment">
        <form ref={postOrder} onSubmit={submit}>
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Pay with Credit Card</h1>
              <p className="text-center">Set you credit card</p>
            </div>
            <div className="credit-card-container">
              <div className="form-group">
                <div className="field-group">
                  <div className="field">
                    <label htmlFor="card">Credit card</label>
                    <select name="cards" id="cards" placeholder="VISA / DANKORT" className="input-text" required>
                      <option value="volvo">VISA / DANKORT</option>
                      <option value="saab">MASTERCARD</option>
                      <option value="fiat">AMERICAN EXPRESS</option>
                      <option value="audi">OTHER</option>
                    </select>

                    <span className="error-message">Enter a valid value</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="field-group">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input type="text" name="name" id="name" placeholder="Insert your full name" minLength="2" className="input-text" required />
                      <span className="error-message">Enter a valid value</span>
                    </div>
                    <div className="field">
                      <label htmlFor="card-number">Card number</label>
                      <input type="text" name="card-number" id="card-number" placeholder="Insert card number" minLength="8" maxLength="11" className="input-text" required />
                      <span className="error-message">Enter a valid value</span>
                    </div>
                  </div>
                  <div className="field-group">
                    <div className="field">
                      <label htmlFor="code">Check digits</label>
                      <input type="text" name="code" id="code" placeholder="Insert card check digits" minLength="3" maxLength="3" className="input-text" required />
                      <span className="error-message">Enter a valid value</span>
                    </div>
                    <div className="field">
                      <label htmlFor="date">Expiration date</label>
                      <input type="date" name="date" id="date" placeholder="Insert expiration date" className="input-text" required />
                      <span className="error-message">Enter a valid value</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-main" type="submit">
                PAY
              </button>
            </div>
          </div>
        </form>
      </section>
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
