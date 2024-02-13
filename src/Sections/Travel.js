import React from "react";

export default function Travel() {
  return (
    <div
      className="section"
      style={{ backgroundColor: "#d4d4d4", color: "#444" }}
    >
      <span id="travel" style={{ position: "absolute", top: "-90px" }}></span>
      <div className="section-title">Travel</div>
      <div className="section-content-flex" style={{ gap: "1rem" }}>
        <div className="subsection">
          <div className="subsection-img">
            <img src="images/travel.png" alt="" />
          </div>
        </div>
        <div className="subsection">
          <div className="travel-section">
            <p>
              The easiest way to get to Salamanca, if you are coming from
              abroad, is to fly to Madrid (Madrid-Barajas Airport) and either
              take a bus or the train.
            </p>
            <p>
              Check the two operators' websites for more info, for the
              timetables and to reserve{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 100,
                  color: "#ababab",
                }}
              >
                (we recommend booking tickets well in advance)
              </span>
            </p>
            <div className="travel-buttons-container">
              <a className="travel-button" href="https://www.renfe.com/">
                <img
                  className="travel-icon"
                  src="images/train-icon.png"
                  alt="train"
                />{" "}
                renfe
              </a>
              <a className="travel-button" href="https://www.avanzabus.com">
                <img
                  className="travel-icon"
                  src="images/bus-icon.png"
                  alt="train"
                />{" "}
                avanzabus
              </a>
            </div>
            <p>
              Alternative travel options include driving to Salamanca; taking a
              direct bus from other Spanish cities, from Portugal or from
              France; or flying to the airport in the nearby city of Valladolid.
              For more info, check the{" "}
              <a
                href="https://salamanca.es/en/services/on-line-tourist-office/practical-information"
                className="inline-link"
              >
                official touristic website
              </a>{" "}
              of Salamanca.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
