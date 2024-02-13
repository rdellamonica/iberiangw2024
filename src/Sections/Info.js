import React from "react";

export default function Info() {
  return (
    <div
      className="section"
      style={{ backgroundColor: "#eeeeee", color: "#ededed" }}
    >
      <span id="info" style={{ position: "absolute", top: "-90px" }}></span>
      <div className="section-content-flex" style={{ gap: "1rem" }}>
        <div className="subsection">
          <div className="text-section">
            <p>CONFERENCE_DESCRIPTION</p>
          </div>
        </div>
        <div className="subsection">
          <div className="subsection-img">IMAGE</div>
        </div>
      </div>
    </div>
  );
}
