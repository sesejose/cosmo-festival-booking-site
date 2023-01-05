import React from "react";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";

function Pages(props) {
  return (
    <>
      <section id="pages">
        <div className="container-page">
          <Ticket
            areas={props.areas}
            totalReg={props.totalReg}
            totalVip={props.totalVip}
            cartReg={props.cartReg}
            cartVip={props.cartVip}
            addRegToCart={props.addRegToCart}
            addVipToCart={props.addVipToCart}
            checkAvailability={props.checkAvailability}
            spot={props.spot}
            updateGreen={props.updateGreen}
            green={props.green}
            getTents={props.getTents}
          />

          <hr className="divider"></hr>

          <Acommodation
            areas={props.areas}
            cartReg={props.cartReg}
            cartVip={props.cartVip}
            addRegToCart={props.addRegToCart}
            addVipToCart={props.addVipToCart}
            totalReg={props.totalReg}
            spot={props.spot}
            defineAcommodation={props.defineAcommodation}
            totalVip={props.totalVip}
            subtotalPrice={props.subtotalPrice}
            totalPrice={props.totalPrice}
            setReserveID={props.setReserveID}
            reserveID={props.reserveID}
          />

          <hr className="divider"></hr>

          <Personal
            areas={props.areas}
            cartReg={props.cartReg}
            cartVip={props.cartVip}
            addRegToCart={props.addRegToCart}
            addVipToCart={props.addVipToCart}
            totalReg={props.totalReg}
            totalVip={props.totalVip}
            spot={props.spot}
            subtotalPrice={props.subtotalPrice}
            totalPrice={props.totalPrice}
            setReserveID={props.setReserveID}
            reserveID={props.reserveID}
          />

          <hr className="divider"></hr>

          <Payment
            areas={props.areas}
            cartReg={props.cartReg}
            cartVip={props.cartVip}
            addRegToCart={props.addRegToCart}
            addVipToCart={props.addVipToCart}
            totalReg={props.totalReg}
            totalVip={props.totalVip}
            checkAvailability={props.checkAvailability}
            spot={props.spot}
            defineAcommodation={props.defineAcommodation}
            subtotalPrice={props.subtotalPrice}
            totalPrice={props.totalPrice}
          />

          <hr className="divider"></hr>

          <Thanks />
        </div>
      </section>
    </>
  );
}

export default Pages;
