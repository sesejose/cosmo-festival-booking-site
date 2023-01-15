import Image from "next/image";
import Link from "next/link";
// import heroImg from "/public/festivalLanding.jpg";

export default function Herosection() {
  return (
    <>
      <section>
        <div className="herosection">
          {/* <Image src={heroImg} alt="festival" width={1512} height={830} /> */}
          <div className="dates-and-will-you-container">
            <div className="title-dates-container">
              <div className="dates-container">
                <span className="huge turquoise">
                  15 <span className="unicode">&#10022;</span>
                  16 <span className="unicode">&#10022;</span>
                  17 <span className="unicode">&#10022;</span>
                  18 <span className="unicode">&#10022;</span>
                  19 <span className="unicode">&#10022;</span>
                  20 <span className="unicode">&#10022;</span>
                  21
                </span>
                <span className="turquoise december">December</span>
              </div>
              <span className="pink text-hero">COSMO FESTIVAL</span>
              <h1 className="white">+125 DJs playing the whole week.</h1>
            </div>
            <div className="will-you-and-btn-container">
              <h3 className="will-you pink">
                {/* WILL<br></br>YOU<br></br>MISS<br></br>IT? */}
                Will you miss it?
              </h3>
              <Link className="btn-hero" href="/tickets">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
