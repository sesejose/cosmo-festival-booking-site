import React from "react";
import Image from "next/image";
import aboutImg from "/public/about.png";
function Aboutsection() {
  return (
    <>
      <section className="aboutHero">
        <Image src={aboutImg} alt="photo of the festival" />
        <h1 className="PINK">About Cosmo</h1>
      </section>
    </>
  );
}

export default Aboutsection;
