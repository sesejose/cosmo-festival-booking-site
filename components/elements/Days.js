export default function Days({ setFilter }) {
  // if(!schedule){return null}
  // When the component was first loaded, schedule.midgard does not exist, so we return nothing from the component, when it does we destructure. better?
  // const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
  // after changing the setFinter to the index and passing it as a props the 2 lines of code are not necesary

  return (
    <>
      <section id="days">
        <h1>Line up</h1>
        <div className="flex-row-space-around container">
          <button type="button" onClick={() => setFilter("mon")} className="btn-days">
            Monday
          </button>
          <button type="button" onClick={() => setFilter("tue")} className="btn-days">
            Thuesday
          </button>
          <button type="button" onClick={() => setFilter("wed")} className="btn-days">
            Wednesday
          </button>
          <button type="button" onClick={() => setFilter("thu")} className="btn-days">
            Thursday
          </button>
          <button type="button" onClick={() => setFilter("fri")} className="btn-days">
            Friday
          </button>
          <button type="button" onClick={() => setFilter("sat")} className="btn-days">
            Saturaday
          </button>
          <button type="button" onClick={() => setFilter("sun")} className="btn-days">
            Sunday
          </button>
        </div>
      </section>
    </>
  );
}
