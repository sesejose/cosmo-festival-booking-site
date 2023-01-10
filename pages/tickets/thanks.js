import React from "react";

function thanks() {
  return (
    <>
      <section id="thanks">
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Thank you!</h1>
              <p className="text-center">These are your tickets. Enjoy!</p>
            </div>

            <div className="wrapper-ticket-downloable">
              <div className="flex-row-space-around ticket-downloable">
                <div>
                  <h3 className="turquoise">Cosmo Festival</h3>
                  <h4 className="white">Dates included</h4>
                  <div className="flex-row-space-around ul-li">
                    <ul className="white">
                      <li>
                        <p>15.12.2022</p>
                      </li>
                      <li>
                        <p>16.12.2022</p>
                      </li>
                      <li>
                        <p>17.12.2022</p>
                      </li>
                      <li>
                        <p>18.12.2022</p>
                      </li>
                    </ul>
                    <ul className="white">
                      <li>
                        <p>19.12.2022</p>
                      </li>
                      <li>
                        <p>20.12.2022</p>
                      </li>
                      <li>
                        <p>21.12.2022</p>
                      </li>
                      <li>
                        <p>22.12.2022</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="turquoise">Regular Pass</h3>
                  <h4 className="turquoise">Jhon Doe</h4>
                  <div>
                    <ul className="white">
                      <li>
                        <p>Svartheim</p>
                      </li>
                      <li>
                        <p>Booking camping spot</p>
                      </li>
                      <li>
                        <p>Green camping</p>
                      </li>
                      <li>
                        <p>Tent included</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="white">Ticket number:</h4>
                  <h3 className="turquoise">12345678</h3>
                  <h4 className="white">Order number:</h4>
                  <h4 className="turquoise">12345678</h4>
                </div>
              </div>
              <hr></hr>
              <div className="download">
                <button className="btn-pink">Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default thanks;
