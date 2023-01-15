import React from "react";
import Context from "../Context";
import { useContext } from "react";

function Thanks() {
  const context = useContext(Context);
  return (
    <>
      <section id="thanks">
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Thank you!</h1>
              <p className="text-center">This your order.</p>
            </div>

            <div className="wrapper-ticket-downloable">
              <h2 className="turquoise text-center">Your order</h2>
              <div className="flex-row ticket-downloable">
                <div>
                  <h4 className="turquoise">Dates included</h4>
                  {/* <h4 className="white">Dates included</h4> */}
                  {/* <div className="thanks-dates ul-li"> */}
                  <p>15.12.2022</p>
                  <p>16.12.2022</p>
                  <p>17.12.2022</p>
                  <p>18.12.2022</p>
                  <p>19.12.2022</p>
                  <p>20.12.2022</p>
                  <p>21.12.2022</p>
                  {/* </div> */}
                </div>

                <div>
                  <h4 className="turquoise">Regular Pass(es)</h4>
                  <p>{context.totalReg}</p>
                  <h4 className="turquoise">{context.users.name}</h4>
                  <h4 className="turquoise">Vip Pass(es)</h4>
                  <p>{context.totalVip}</p>
                  <h4 className="turquoise">{context.users.name}</h4>
                  <h4 className="turquoise">Booking camping spot included</h4>
                  <p>Yes</p>
                  <h4 className="turquoise">Accommodation</h4>
                  <p>{context.spot}</p>
                </div>

                <div>
                  <h4 className="turquoise">Green camping</h4>
                  <p>{context.green}</p>
                  <h4 className="turquoise">Tents 2 pers.</h4>
                  <p>{context.totalTent2}</p>
                  <h4 className="turquoise">Tents 3 pers.</h4>
                  <p>{context.totalTent3}</p>
                  {/* <h4 className="turquoise">Ticket number:</h4> */}
                  {/* <h3 className="turquoise">12345678</h3> */}
                  <h4 className="turquoise">Order number:</h4>
                  <p>12345678</p>
                </div>
              </div>
              <hr></hr>
              <div className="sub-total-container">
                <div className="flex-row-space-around">
                  <p className="white">Subtotal</p>
                  <p className="white">DKK {context.cartVip.amount * context.cartVip.price + context.cartReg.amount * context.cartReg.price}</p>
                </div>
                <div className="flex-row-space-around">
                  <p className="white">Fixed camping fee</p>
                  <p className="white">DKK {context.fixedCampingPrice}</p>
                </div>
                <div className="flex-row-space-around">
                  <p className="white">Green Camping</p>
                  <p className="white">DKK {context.greenPrice}</p>
                </div>
                <div className="flex-row-space-around">
                  <h3 className="white">Total</h3>
                  <h3 className="white">DKK {context.cartVip.amount * context.cartVip.price + context.cartReg.amount * context.cartReg.price + context.fixedCampingPrice + context.greenPrice + context.tent2Price + context.tent3Price}</h3>
                </div>
              </div>
              <div className="download">
                <button className="btn-pink">Print</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Basket></Basket> */}
    </>
  );
}

export default Thanks;
