import React from "react";

const socList = [
  {
    name: "Name",
    surname: "Surname",
    affiliation: "Affiliation",
  },
  {
    name: "Name",
    surname: "Surname",
    affiliation: "Affiliation",
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
      style={{ color: "white", backgroundColor: "#4b73a8" }}
    >
      <span id="SOC" style={{ position: "absolute", top: "-90px" }}></span>
      <div className="section-title">Scientific Organizing Committee (SOC)</div>
      <div className="section-content-grid">
        {socList.sort(sortBySurname).map((loc, i) => {
          return (
            <div className="soc-item" key={loc.surname}>
              <p>
                <span className="loc-name">{loc.name}</span>{" "}
                <span className="loc-surname">{loc.surname}</span>
              </p>
              <p>
                <div className="soc-affiliation">{loc.affiliation}</div>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
