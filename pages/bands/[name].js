import { useRouter } from "next/router";
import Image from "next/image";
import artistImg from "/public/artist.png";
// import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Band({ bands }) {
  const router = useRouter();
  const { name } = router.query;
  const band = bands.find((band) => band.name === name);

  return (
    <div className="container-page layout">
      <div className="container">
        <section className="artist">
          <section className="artisthero">
            <Image src={artistImg} alt="artist image" />
            <h1>{band.name}</h1>
          </section>
          {/* 
         <section className="stageInfo">
            <h2>Stage</h2>
            <h2>Time</h2>
            <h6>Find the artist:</h6>
            <div className={styles.artistSocials}>
              <button type="button" target="_blank">
                Facebook
              </button>
              <button type="button" target="_blank">
                Spotify
              </button>
              <button type="button" target="_blank">
                Youtube
              </button>
              <button type="button" target="_blank">
                Instagram
              </button>
            </div>
          </section>  */}

          <section className="artistInfo">
            <h2>{band.name}</h2>
            <h5>Genre: {band.genre}</h5>
            <h3>Members</h3>
            <ul>
              {band.members.map((member, index) => {
                return <li key={index}>{member}</li>;
              })}
            </ul>
            <p>{band.bio}</p>
          </section>
        </section>
      </div>
    </div>
  );
}

// {/*     <Image alt={band.name} src={band.logo} width={200} height={200} />
//  */}
export async function getStaticPaths() {
  const res = await fetch("https://bitter-moon-5524.fly.dev/bands");
  //const res = await fetch("http://localhost:8080/bands"); //karina URL:  (just in case)

  const dataBands = await res.json();
  const paths = dataBands.map((band) => {
    return {
      params: {
        name: band.name.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  /* This function runs before the component bands is render
  - fetch the data
  - wait for that data
  - once we have the data, it put into the component
  - so the component can render with that data inside it  */

  const res = await fetch("https://bitter-moon-5524.fly.dev/bands");
  //const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();

  /* - we return a value for this function 
- that value is going to be an object 
- inside the object we have a props property we give the property a value
- that value is goint to be an object so we can past all the properties that we need*/
  return {
    props: { bands: data },
  };
}
