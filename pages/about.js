import Image from "next/image";
import Abouthero from "../components/elements/Abouthero";
import Basket from "../components/Booking/Basket";
// import styles from "../styles/Home.module.css";
// import aboutImg from "/public/about.png";
import aboutImg2 from "/public/about2.png";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section id="about">
        <Abouthero></Abouthero>
        <div className="container-page">
          <div className="container">
            <div className="cards about-img">
              <Image src={aboutImg2} alt="photo of the festival" />
            </div>
            <div className="desc">
              <h1 className="turquoise">The biggest event on the electronic music sphere.</h1>
              <p>
                Founded in December of 2022 by three crazy and lost souls Niki, Jose and Karina that had no idea about
                what they were doing but combining their skill in design, music and in life, created the best of all
                times solution for those who, like them, are addicted to explosion of sound, color, and good vibes.
                Under the pressure, of the masterminds Jonas, Klaus, and Peter, to organised the best ever festival with
                the best user experience, the Cosmo´s founders accepted the challenge and founded the best electronic
                festival of all times.
              </p>
              <Link href="/lineup" className="btn-turquoise">
                CHECK OUT OUR LINEUP!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
