import React from "react";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
import Context from "../Context";
import { useContext } from "react";

function Pages(props) {
  const context = useContext(Context);

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <Ticket areas={props.areas} spot={props.spot} checkAvailability={props.checkAvailability} updateGreen={props.updateGreen} green={props.green} getTents={props.getTents} />

          <hr className="divider"></hr>

          <Acommodation areas={props.areas} spot={props.spot} defineAcommodation={props.defineAcommodation} subtotalPrice={props.subtotalPrice} totalPrice={props.totalPrice} setReserveID={props.setReserveID} reserveID={props.reserveID} />

          <hr className="divider"></hr>

          <Personal areas={props.areas} spot={props.spot} subtotalPrice={props.subtotalPrice} totalPrice={props.totalPrice} setReserveID={props.setReserveID} reserveID={props.reserveID} />

          <hr className="divider"></hr>

          <Payment areas={props.areas} spot={props.spot} checkAvailability={props.checkAvailability} defineAcommodation={props.defineAcommodation} subtotalPrice={props.subtotalPrice} totalPrice={props.totalPrice} />

          <hr className="divider"></hr>

          <Thanks />
        </div>
      </section>
    </>
  );
}

export default Pages;
