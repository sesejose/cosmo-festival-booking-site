import React from "react";
import { useState, useEffect, useRef } from "react";
import Pages from "../../components/Booking/Pages";
import Basket from "../../components/Booking/Basket";
// import Ticket from "../../components/Booking/Ticket";
// import Acommodation from "../../components/Booking/Acommodation";
// import Personal from "../../components/Booking/Personal";
// import Payment from "../../components/Booking/Payment";
// import Thanks from "../../components/Booking/Thanks";
// import { sendEtagResponse } from "next/dist/server/send-payload";

export default function TicketsPage(props) {
  return (
    <>
      <Pages
        areas={props.areas}
        cartReg={props.cartReg}
        regName={props.regName}
        regPrice={props.regPrice}
        regAmount={props.regAmount}
        cartVip={props.cartVip}
        vipName={props.vipName}
        vipPrice={props.vipPrice}
        vipAmount={props.vipAmount}
        addRegToCart={props.addRegToCart}
        addVipToCart={props.addVipToCart}
        spot={props.spot}
        subtotalPrice={props.subtotalPrice}
        totalReg={props.totalReg}
        totalVip={props.totalVip}
        totalPrice={props.totalPrice}
        fixedCampingPrice={props.fixedCampingPrice}
        greenPrice={props.greenPrice}
        green={props.green}
        updateGreen={props.updateGreen}
        getTents={props.getTents}
        totalTent2={props.totalTent2}
        totalTent3={props.totalTent3}
        tent2Price={props.tent2Price}
        tent3Price={props.tent3Price}
        checkAvailability={props.checkAvailability}
        defineAcommodation={props.defineAcommodation}
      ></Pages>

      <Basket
        areas={props.areas}
        cartReg={props.cartReg}
        regName={props.regName}
        regPrice={props.regPrice}
        regAmount={props.regAmount}
        cartVip={props.cartVip}
        vipName={props.vipName}
        vipPrice={props.vipPrice}
        vipAmount={props.vipAmount}
        addRegToCart={props.addRegToCart}
        addVipToCart={props.addVipToCart}
        spot={props.spot}
        subtotalPrice={props.subtotalPrice}
        totalReg={props.totalReg}
        totalVip={props.totalVip}
        totalPrice={props.totalPrice}
        fixedCampingPrice={props.fixedCampingPrice}
        greenPrice={props.greenPrice}
        green={props.green}
        totalTent2={props.totalTent2}
        totalTent3={props.totalTent3}
        tent2Price={props.tent2Price}
        tent3Price={props.tent3Price}
      />
    </>
  );
}
