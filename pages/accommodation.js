import React from "react";
function accomodation() {
  return (
    <section className="page-accomodation">
      <div>
        <div className="forms-intro-text">
          <h1 className="turquoise text-center">Accommodation</h1>
          <p className="text-center">Select the area in the camping where you wanna set your tent/s.</p>
        </div>
        <div className="flex-row">
          <div className="modal-acommodation-container">
            <div className="modal-map-container">
              <div className="camping-areas-row">
                <h3 className="purple">Stages area</h3>
              </div>
              <div className="map-stages-container">
                <div className="modal-map-stage">
                  <h4 className="purple">MIDGARD</h4>
                </div>
                <div className="modal-map-stage">
                  <h4 className="purple">VANAHEIM</h4>
                </div>
                <div className="modal-map-stage">
                  <h4 className="purple">JOTUNHEIM</h4>
                </div>
              </div>

              <div className="camping-areas-container">
                <div className="camping-areas-row">
                  <div className="modal-camping-area">
                    <div className="green-1">
                      <h4>Svartheim</h4>
                    </div>
                  </div>

                  <div className="modal-camping-area">
                    <div className="green-1">
                      <h4>Nilfheim</h4>
                    </div>
                  </div>
                </div>

                <div className="camping-areas-row">
                  <h3 className="green-1">Camping area</h3>
                </div>

                <div className="camping-areas-row">
                  <div className="modal-camping-area">
                    <div className="green-1">
                      <h4>Helheim</h4>
                    </div>
                  </div>
                  <div className="modal-camping-area">
                    <div className="green-1">
                      <h4>Muspelheim</h4>
                    </div>
                  </div>
                  <div className="modal-camping-area">
                    <div className="green-1">
                      <h4>Alfheim</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-green-camping">
              <div className="yellow">
                <h4>Green camping</h4>
              </div>
            </div>
          </div>
          <div className="modal-map-description-container">
            <div>
              <h4 className="purple">Stages</h4>
              <p className="purple">Cosmos Festival never sleeps, we have artists and DJs playing 24 hours in our 3 stages with small breaks. You can always find concerts and music performances at Midgard, Vanaheim or Jotunheim stages.</p>
            </div>
            <div>
              <h4 className="green-1">Camping areas</h4>
              <p className="green-1">
                We have 5 different camping areas. You can choose them for the proximity to the stages where your favorite artists are playing. For just 99, - you can choose to camp in: Midgard Vanaheim Jotunheim We can also help you to set-up your
                camping: 2 person tent (including the tent) just for 299,- 3 person tent (including the tent) just for 399,-
              </p>
            </div>
            <div>
              <h4 className="yellow">Green camping</h4>
              <p className="yellow">
                You can help our environment by choose our Green camping option, that allow us to : Give you ecological food options. Contributes with our effort in water conservation. Reduce the waste using reusable utensils like cutlery, bottles,
                plates, etc. Just for 249,- more.
              </p>
            </div>
          </div>
          <div className="modal-stages-description-container">
            <div>
              <h4 className="green-1">Svartheim</h4>
              <p className="green-1">Full of trees and close to the entrance, the perfect place for the green camping .</p>
            </div>
            <div>
              <h4 className="green-1">Nilfheim</h4>
              <p className="green-1">Are you coming with your caravan, this camping spot is the right one for you.</p>
            </div>
            <div>
              <h4 className="green-1">Helheim</h4>
              <p className="green-1">A nap between concerts? This one is the right one, far enough to not be bothered by the music.</p>
            </div>
            <div>
              <h4 className="green-1">Muspelheim</h4>
              <p className="green-1">The biggest stage, where the most popular artis are going to play.</p>
            </div>
            <div>
              <h4 className="green-1">Alfheim</h4>
              <p className="green-1">Full of trees and close to the entrance, the perfect place for the green camping .</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default accomodation;
