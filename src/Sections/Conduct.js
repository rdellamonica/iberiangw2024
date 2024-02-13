import React from "react";

export default function Conduct() {
  return (
    <div
      className="section"
      style={{ backgroundColor: "#e4e4e4", color: "#152542" }}
    >
      <span id="conduct" style={{ position: "absolute", top: "-90px" }}></span>
      <div className="section-title">Code of conduct</div>
      <div className="section-content-flex" style={{ gap: "1rem" }}>
        <div className="subsection">
          <p style={{ textAlign: "justify" }}>
            Our conference is dedicated to fostering a collaborative and
            respectful environment where attendees from diverse backgrounds can
            engage in fruitful discussions, share knowledge, and network with
            fellow researchers. To ensure a positive and enriching experience
            for everyone, we kindly request that you adhere to the following
            code of conduct throughout the conference.
          </p>
          <div className="conduct-grid">
            <div className="conduct-item">
              <div className="conduct-item-title">
                <div className="number">1</div>
                <div className="title">Respect</div>
              </div>
              <div className="conduct-item-content">
                Treat all participants with professionalism and courtesy. Engage
                in respectful dialogue and refrain from offensive language or
                behavior. Challenge ideas, not individuals. Avoid personal
                attacks or dismissive language.
              </div>
            </div>
            <div className="conduct-item">
              <div className="conduct-item-title">
                <div className="number">2</div>
                <div className="title">Inclusivity</div>
              </div>
              <div className="conduct-item-content">
                Embrace diversity in all its forms, including but not limited to
                age, gender, sexual orientation, ethnicity, nationality, and
                scientific perspectives. Create an inclusive atmosphere that
                encourages open-mindedness and collaboration.
              </div>
            </div>
            <div className="conduct-item">
              <div className="conduct-item-title">
                <div className="number">3</div>
                <div className="title">Privacy</div>
              </div>
              <div className="conduct-item-content">
                Always obtain permission before recording or photographing
                speakers or attendees. Respect the privacy and preferences of
                others in this regard.
              </div>
            </div>
            <div className="conduct-item">
              <div className="conduct-item-title">
                <div className="number">4</div>
                <div className="title">Report</div>
              </div>
              <div className="conduct-item-content">
                If you experience or witness any form of harassment, please
                report it immediately to the conference organizers. We are
                committed to addressing such incidents promptly and discreetly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
