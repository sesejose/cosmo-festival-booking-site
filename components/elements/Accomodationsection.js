import Image from "next/image";
import Link from "next/link";
import accomodationImg from "/public/accomodation.jpg";

export default function Acommodationsection() {
  return (
    <section id="accomodation-home">
      <div className="container">
        <div className="cards">
          <Image src={accomodationImg} alt="girl enjoying festival" width={800} height={800} />
        </div>
        <div className="desc">
          <h1 className="turquoise">Acommodations</h1>
          <h2 className="turquoise">Camping options</h2>
          <p>You can enjoy the whole experience, with our 5 camping spaces. You dont need to look else were for accomodation. The feed of prebook a camping spot is 99,-.</p>
          <Link className="btn-turquoise" href="/accomodation">
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
