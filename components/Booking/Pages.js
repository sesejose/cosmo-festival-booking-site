import React from "react";
import Ticket from "./Tickets";
import Acommodation from "./Accommodation";
import Personal from "./Personal";
import Payment from "./Payment";
import Thanks from "./Thanks";
import Context from "../Context";
import { useContext } from "react";

function Pages(props) {
  const context = useContext(Context);

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <Ticket />

          <hr className="divider"></hr>

          <Acommodation />

          <hr className="divider"></hr>

          <Personal />

          <hr className="divider"></hr>

          <Payment />

          <hr className="divider"></hr>

          <Thanks />
        </div>
      </section>
    </>
  );
}

export default Pages;
