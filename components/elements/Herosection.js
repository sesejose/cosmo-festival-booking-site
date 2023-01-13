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
            <h2 className="pink huge">15/12</h2>
            <div className="will-you-and-btn-container">
              <h3 className="will-you pink">
                {/* WILL<br></br>YOU<br></br>MISS<br></br>IT? */}
                WILL YOU MISS IT?
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
