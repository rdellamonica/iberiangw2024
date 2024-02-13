import { React, useRef } from "react";

export default function Footer({ privacyDialog }) {
  function handlePrivacy(e) {
    privacyDialog.current.showModal();
  }

  return (
    <div className="footer">
      <div className="footer-img-grid">
        <div className="img">
          <img src="images/usal_logo_badge.png" alt="" />
        </div>
        <div className="img">
          <img src="images/gracus_w.png" alt="" />
        </div>
        <div className="img">
          <img src="images/iuffym_w.png" alt="" />
        </div>
      </div>
      <div className="footer-link-list">
        <a href="www.usal.es">Universidad de Salamanca</a>
        <a onClick={handlePrivacy}>Privacy policy</a>
      </div>
      <div className="aknowledgment">
        Created by Riccardo Della Monica and David Barba-González © 2024
      </div>
      <dialog className="privacy-policy" ref={privacyDialog}>
        <form method="dialog">
          <p>WRITE PRIVACY POLICY HERE</p>
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}
