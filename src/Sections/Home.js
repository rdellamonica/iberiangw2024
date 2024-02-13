import { React, useEffect, useState, useRef } from "react";
import Spinner from "../Components/Spinner";

export default function Home() {
  const [pageScroll, setPageScroll] = useState(0);

  const handleScroll = () => {
    setPageScroll(50 + window.scrollY / 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-section">
      <div className="home-background-img">
        <img src="images/bg-salamanca-gw.png" alt="USAL" />
        <div className="darken"></div>
      </div>
      <div className="home-logo-container">
        <div className="home-logo">
          <div className="title">
            13<span className="th">th</span> Iberian{" "}
            <span className="underline">Gravitational Waves</span> Meeting
          </div>
          <div className="subtitle">
            <div className="">Salamanca, Spain</div>
            <div className="">June XX-XX 2024</div>
          </div>
        </div>
        <Spinner />
      </div>
    </div>
  );
}
