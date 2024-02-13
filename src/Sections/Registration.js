import { React, useState, useRef } from "react";
import Checkbox from "../Components/Checkbox";
import Radio from "../Components/Radio";
import SubmitSpinner from "../Components/SubmitSpinner";

export default function Registration({ privacyDialog }) {
  const [giveContribution, setGiveContribution] = useState(false);
  const [socialActivities, setSocialActivities] = useState(false);
  const [GDPR, setGDPR] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handlePrivacy = (e) => {
    privacyDialog.current.showModal();
  };

  const formRef = useRef();

  const today = new Date();
  const registrationDeadline = new Date("2024-03-20");
  const abstractDeadline = new Date("2024-03-20");
  const [registrationActive, setRegistrationActive] = useState(
    today <= registrationDeadline
  );
  const [abstractActive, setAbstractActive] = useState(
    today <= abstractDeadline
  );

  function handleSubmit(e) {
    e.preventDefault();

    const regFormData = new FormData(formRef.current);

    if (!regFormData.get("contribution")) {
      regFormData.append("contribution", "false");
      regFormData.append("contrib_type", "null");
      regFormData.append("contrib_title", "null");
      regFormData.append("contrib_abstract", "null");
    } else {
      regFormData.append("contrib_type", "talk");
    }

    if (!regFormData.get("social_activities")) {
      regFormData.append("social_activities", "false");
    }

    setSubmitting(true);
  }

  return (
    <div
      className="section"
      style={{ color: "#dcdcdc", backgroundColor: "#2e3c57" }}
    >
      <span
        id="registration"
        style={{ position: "absolute", top: "-90px" }}
      ></span>
      <div className="section-title">Registration and abstract submission</div>
      <div className="section-content-flex">
        <div className="subsection">
          <div className="registration-deadlines">
            <a
              className="deadline"
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240215%2F20240216&details=&location=Salamanca&text=Abstract%20submission%20deadline%20for%20IberiCOS%202024"
            >
              <div className="title">Deadline</div>
              <div className="date">PUT_DEADLINE_HERE</div>
            </a>
          </div>
        </div>
        <div className="subsection">
          <div className="registration-form">
            <form action="" ref={formRef} onSubmit={handleSubmit}>
              <fieldset disabled={!registrationActive}>
                <div className="form-group">
                  <label htmlFor="name">Name and surname</label>
                  <input name="name" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="affiliation">Affiliation</label>
                  <input name="affiliation" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input name="email" type="email" required />
                </div>
              </fieldset>
              <fieldset disabled={!abstractActive}>
                <div className="form-group">
                  <Checkbox
                    htmlId="contrib"
                    checked={giveContribution}
                    setChecked={setGiveContribution}
                    label="I would like to give a contribution:"
                    htmlName="contribution"
                  />
                </div>
                {giveContribution ? (
                  <div className="optional">
                    <div className="form-group">
                      <label htmlFor="contrib_title">Title</label>
                      <input name="contrib_title" type="text" required></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contrib_abstract">Abstract</label>
                      <textarea
                        name="contrib_abstract"
                        type="text"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>
                ) : null}
                <div className="form-group">
                  <Checkbox
                    htmlId="socact"
                    checked={socialActivities}
                    setChecked={setSocialActivities}
                    label="I would like to participate in social activities:"
                    htmlName="social_activities"
                  />
                </div>
                <div className="form-group">
                  <Checkbox
                    htmlId="gdpr"
                    checked={GDPR}
                    setChecked={setGDPR}
                    label={
                      <p>
                        I have read and understood the{" "}
                        <span className="inline-link" onClick={handlePrivacy}>
                          privacy policy
                        </span>{" "}
                      </p>
                    }
                    htmlName="privacy_policy"
                    required={true}
                  />
                </div>
              </fieldset>
              <fieldset disabled={!registrationActive | !GDPR}>
                <button className="submit-button">
                  {" "}
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </fieldset>
            </form>
            {submitting ? (
              <div className="optional">
                <div className="submitting-bar"></div>
              </div>
            ) : null}
            {submitted ? (
              <div className="optional">
                <div className={"submitted " + submitStatus}>
                  Your registration has been correctly submitted. Check your
                  email.
                </div>
              </div>
            ) : null}
          </div>
          <p
            style={{
              fontWeight: 200,
              fontSize: "0.9rem",
              alpha: 0.5,
              fontStyle: "italic",
            }}
          >
            *Upon registering to the conference you should receive a
            confirmation email. If you don't receive one within 24 hours, please
            get in contact with{" "}
            <a className="inline-link" href="mailto:CONFERENCE_EMAIL">
              CONFERENCE_EMAIL
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
