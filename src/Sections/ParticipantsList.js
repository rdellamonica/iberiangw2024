import { React, useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";

export default function ParticipantsList() {
  const [participants, setParticipants] = useState([
    {
      name: "Name Surname",
      affiliation: "Affiliation",
    },
  ]);
  const [searchParticipant, setSearchParticipant] = useState("");

  return (
    <div className="section" style={{ backgroundColor: "#eee", color: "#444" }}>
      <span
        id="participants"
        style={{ position: "absolute", top: "-90px" }}
      ></span>
      <div className="section-title">Participants List</div>
      <SearchBar
        searchParticipant={searchParticipant}
        setSearchParticipant={setSearchParticipant}
      />
      <div className="participants-container">
        {participants
          .filter((p) =>
            p.name.toUpperCase().includes(searchParticipant.toUpperCase())
          )
          .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
          .map((participant) => {
            console.log(participant);
            return (
              <div className="participant" key={participant.name}>
                <div className="participant-name">{participant.name}</div>
                <div className="participant-affiliation">
                  {participant.affiliation}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
