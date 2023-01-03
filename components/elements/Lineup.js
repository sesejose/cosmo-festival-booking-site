import Link from "next/link";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import { useState } from "react";

export default function Lineup({ bands, schedule }) {
  const [filter, setFilter] = useState("mon");

  //this /bands.map makes dynamic links to open the bands pages
  //logic if the bands are playing on the filter day then print
  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
  //dynamic [] gives me every data after Midgard in this case the obj days with their object shows
  const midgard = schedule.Midgard[filter];
  const jotunheim = schedule.Jotunheim[filter];
  const vanaheim = schedule.Vanaheim[filter];

  return (
    <>
      <section id="lineup">
        <div className="container">
          <ul className="lineup">
            {midgard.map((band) => {
              if (band.act !== "break") {
                return (
                  <Link key={band.act + Date.now()} href={`bands/${band.act}`}>
                    <li>
                      <h3>- {band.act}</h3>
                    </li>
                  </Link>
                );
              }
            })}

            {jotunheim.map((band) => {
              if (band.act !== "break") {
                return (
                  <Link key={band.act + Date.now()} href={`bands/${band.act}`}>
                    <li>
                      <h3>- {band.act}</h3>
                    </li>
                  </Link>
                );
              }
            })}

            {vanaheim.map((band) => {
              if (band.act !== "break") {
                return (
                  <Link key={band.act + Date.now()} href={`bands/${band.act}`}>
                    <li>
                      <h3>- {band.act}</h3>
                    </li>
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   // const res = await fetch("https://bitter-moon-5524.fly.dev/bands");
//   const res = await fetch("http://localhost:8080/bands");
//   const data = await res.json();
//   return {
//     props: { bands: data },
//   };
// }

/* <div className="">
          <Tabs>
            <TabList className="flex-row-space-around container">
              <Tab>Monday</Tab>
              <Tab>Tuesday</Tab>
              <Tab>Wednesday</Tab>
              <Tab>Thursday</Tab>
              <Tab>Friday</Tab>
              <Tab>Saturday</Tab>
              <Tab>Sunday</Tab>
            </TabList>

            <TabPanel>
              <div>
                <h2>{bands}</h2>
              </div>
              <p>Something</p>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
          </Tabs>
        </div> */
