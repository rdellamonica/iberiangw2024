import React from "react";

const locList = [
  {
    name: "Name",
    surname: "Surname",
  },
  {
    name: "Name",
    surname: "Surname",
  },
];

const sortBySurname = (a, b) => {
  if (a.surname.toUpperCase() > b.surname.toUpperCase()) {
    return 1;
  } else {
    return -1;
  }
};

export default function LOC() {
  return (
    <div
      className="section"
      style={{ color: "white", backgroundColor: "#141516" }}
    >
      <span id="LOC" style={{ position: "absolute", top: "-90px" }}></span>
      <div className="section-title">Local Organizing Committee (LOC)</div>
      <div className="section-content-grid">
        {locList.sort(sortBySurname).map((loc, i) => {
          return (
            <div className="loc-item" key={loc.surname}>
              <span className="loc-name">{loc.name}</span>{" "}
              <span className="loc-surname">{loc.surname}</span>
            </div>
          );
        })}
      </div>
      <p>
        For any question please contact the LOC at:{" "}
        <a
          href="mailto:CONFERENCE_EMAIL"
          className="inline-link"
          style={{ color: "white" }}
        >
          CONFERENCE_EMAIL
        </a>
        .
      </p>
    </div>
  );
}
