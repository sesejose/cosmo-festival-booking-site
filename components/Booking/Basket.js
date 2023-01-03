import React from "react";
import { useEffect, useState } from "react";

export default function Basket(props) {
  const [data, setData] = useState();

  // Fetching the cosmo_festival table from Supabase
  useEffect(() => {
    async function getData() {
      const url = "https://udfchraccrfladlsvbzh.supabase.co/rest/v1/cosmo_festival";
      const headers = {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Prefer: "return-representation",
      };
      const options = {
        method: "GET",
        headers: headers,
      };
      // Await then execute the code.
      const res = await fetch(url, options); // Fetchs the data (await)
      const data = await res.json(); //When it's done getting it
      // return data; // This returned "data/array" used in the showData();
      setData(data);
      // console.log(data);
    }
    getData();
  }, []);
  return (
    <>
      <section id="basket">
        <div className="basket-container">
          <div className="summery">
            <h2 className="turquoise">Order summery</h2>

            <h4 className="white">Time to complete the order:</h4>
            <p className="turuoise">0</p>
          </div>
          <div className="ticekt-display-basket">
            <div id="ticket-template">
              <div className="posts">
                <div className="post-quantity-remove">
                  <h4 className="turquoise type">{props.cartReg.displayname}</h4>
                  {/* <h4 className="turquoise type">{props.regName}</h4> */}
                  <h5 className="white price">Ticket price: DKK {props.regPrice}</h5>
                </div>
                <div className="post-type-price">
                  <h4 className="turquoise type">x{props.regAmount}</h4>
                  <button className="btn-remove">Remove</button>
                </div>
              </div>
            </div>

            <div id="ticket-template">
              <div className="posts">
                <div className="post-quantity-remove">
                  <h4 className="turquoise type">{props.vipName}</h4>
                  <h5 className="white price">Ticket price: DKK {props.vipPrice}</h5>
                </div>
                <div className="post-type-price">
                  <h4 className="turquoise type">x{props.vipAmount}</h4>
                  <button className="btn-remove">Remove</button>
                </div>
              </div>
            </div>
            <div>
              <h5 className="white">Total of tickets:</h5>
              <p className="turquoise">{props.totalReg + props.totalVip}</p>
            </div>
          </div>
          <div className="extra-display-basket">
            <div className="posts">
              <div className="post-text-container">
                <h4 className="turquoise">Acommodation</h4>
                <h5 className="white">{props.spot}</h5>
              </div>
            </div>
            <div className="posts">
              <div className="post-text-container">
                <h4 className="turquoise">Green camping spot</h4>
                <h5 className="white">{props.green}</h5>
              </div>
            </div>

            <div className="posts">
              <div className="post-quantity-remove">
                <h4 className="turquoise">Tent 2 persons</h4>
                <h5 className="white">Price: DKK 299</h5>
              </div>
              <div className="post-type-price">
                <h4 className="turquoise">x{props.totalTent2}</h4>
                <button className="btn-remove">Remove</button>
              </div>
            </div>

            <div className="posts">
              <div className="post-quantity-remove">
                <h4 className="turquoise">Tent 3 persons</h4>
                <h5 className="white">Price: DKK 399</h5>
              </div>
              <div className="post-type-price">
                <h4 className="turquoise">x{props.totalTent3}</h4>
                <button className="btn-remove">Remove</button>
              </div>
            </div>
          </div>
          <div className="sub-total-container">
            <div className="flex-row-space-around">
              <p className="white">Subtotal</p>
              <p className="white">DKK {props.subtotalPrice}</p>
            </div>
            <div className="flex-row-space-around">
              <p className="white">Fixed camping fee</p>
              <p className="white">DKK {props.fixedCampingPrice}</p>
            </div>
            <div className="flex-row-space-around">
              <p className="white">Green Camping</p>
              <p className="white">DKK {props.greenPrice}</p>
            </div>
            <div className="flex-row-space-around">
              <h3 className="white">Total</h3>
              <h3 className="white">DKK {props.totalPrice}</h3>
            </div>
            <button className=" basket-display-pay">PAY</button>
          </div>
        </div>
      </section>
    </>
  );
}

// const quaReg = parseInt(props.totalReg, 10);
// const quaVip = parseInt(props.totalVip, 10);
// const [totalTickets, setTotalTickets] = useState([]);

// const total = setTotalPrice(props.cartVip.amount * props.cartVip.price + props.cartReg.amount * props.cartReg.price);
// console.log(total);

// useEffect(() => {
//   function getTotal() {
//     const total = 10;
//     setTotalTickets(total);
//     // return totalTickets
//   }
//   getTotal(totalTickets);
//   // console.log(totalTickets);
//   // console.log(props.cartReg.displayname);
// });

// init();

// async function init() {
//   showTickets();
// }

// function addTickets(data) {
// }

// showTickets();

// async function showTickets() {
// console.log(quaReg);
// const data = await getTickets();
// Await: It makes the code wait until the promise returns a result.
// console.log(data);
// data.forEach((element) => {
//   const template = document.querySelector("#ticket-template").content;
//   const copy = template.cloneNode(true);
//   copy.querySelector(".type").textContent = element.type;
//   copy.querySelector(".price").textContent = element.price;
//   const button = copy.querySelector("btn-remove");
//   button.addEventListener("click", () => {
//     deleteTickets(element.id);
//   });
//   document.querySelector(".post-text-container").appendChild(copy);
// });
// }

// function deleteTickets() {
//   console.log(props.id);
// }
