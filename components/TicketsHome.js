// import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function TicketsHome() {
  return (
    <>
      <section id="tickets-home">
        <div className="container">
          <div className="cards">
            <div className="card1">
              <p>Regular Pass</p>
            </div>
            <div className="card2">
              <p>VIP Pass</p>
            </div>
          </div>
          <div className="desc">
            <h1 className="turquoise">Tickets</h1>
            <h2 className="turquoise">Whhat you need to know!</h2>
            <p>
              Cosmo Festival is an event for 18 and older.
              <br></br>Your name is going to be printed in the ticket so your name should coincide with your name on your ID.<br></br>If your are looking for the bigwig experience, our VIP ticket is for you! Enjoy extra services as VIP, such as:
              <br></br>
            </p>
            <ul>
              <li>
                <p>Exlucive VIP entrance & exit points </p>
              </li>
              <li>
                <p>Area with unobstructed view close to the stages</p>
              </li>
              <li>
                <p>Reserved VIP zones and tables</p>
              </li>
              <li>
                <p>Special Bar services</p>
              </li>
              <li>
                <p>and much more</p>
              </li>
            </ul>

            <Link className="btn-turquoise" href="/tickets">
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
