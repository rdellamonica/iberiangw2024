import { React, useRef } from "react";
import Header from "./Sections/Header";
import Home from "./Sections/Home";
import LOC from "./Sections/LOC";
import SOC from "./Sections/SOC";
import Registration from "./Sections/Registration";
import Info from "./Sections/Info";
import Footer from "./Sections/Footer";
import ParticipantsList from "./Sections/ParticipantsList";
import Travel from "./Sections/Travel";
import Conduct from "./Sections/Conduct";

export default function App() {
  const privacyDialog = useRef();

  return (
    <div className="container">
      <Header />
      <Home />
      <Info />
      <Registration privacyDialog={privacyDialog} />
      <Travel />
      <ParticipantsList />
      <SOC />
      <LOC />
      <Conduct />
      <Footer privacyDialog={privacyDialog} />
    </div>
  );
}
