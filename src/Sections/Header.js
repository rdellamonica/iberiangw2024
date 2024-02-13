import { React, useEffect, useState, useRef } from "react";
import "./Hamburger.css";

export default function Header() {
  const [pageScroll, setPageScroll] = useState(0);
  const headerRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      setMenuOpen(false);
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const handleClickHam = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    setPageScroll(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={
          "header" +
          (pageScroll < 343 ? " hidden " : "") +
          (menuOpen ? " active" : "")
        }
      >
        <div className="header-logo">
          <img src="images/logo-small.png" alt="" />
        </div>
        <div className="header-menu-container">
          <div className="header-menu">
            <a href="#info" className="menu-item">
              Info
            </a>
            <a href="#registration" className="menu-item">
              Registration
            </a>
            <a href="#travel" className="menu-item">
              Travel
            </a>
            <a href="#participants" className="menu-item">
              Participants
            </a>
            <a href="#SOC" className="menu-item">
              Committees
            </a>
          </div>
          <div className="header-ham">
            <svg
              className={"ham hamRotate ham1 " + (menuOpen ? "active" : null)}
              viewBox="0 0 100 100"
              width="40"
              onClick={handleClickHam}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
