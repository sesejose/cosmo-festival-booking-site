import React from "react";
import Lineup from "../components/elements/Lineup";
function lineup(props) {
  return (
    <section className="lineupPage">
      <h1 className="turquoise">Lineup</h1>
      <Lineup bands={props.bands} schedule={props.schedule} />;
    </section>
  );
}

export default lineup;
export async function getServerSideProps() {
  const [scheduleRes, bandsRes, areasRes] = await Promise.all([
    fetch(`https://bitter-moon-5524.fly.dev/schedule`),
    //fetch("http://localhost:8080/schedule"),

    fetch(`https://bitter-moon-5524.fly.dev/bands`),
    //fetch("http://localhost:8080/bands"),

    fetch(`https://bitter-moon-5524.fly.dev/available-spots`),
    //fetch("http://localhost:8080/available-spots"),
  ]);

  const [schedule, bands, areas] = await Promise.all([scheduleRes.json(), bandsRes.json(), areasRes.json()]);

  return { props: { schedule, bands, areas } };
}
