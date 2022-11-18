import React from "react";

const ConferenceItem = ({ year, title, number, link }) => {
  return (
    <div className="conference-item">
      <div className="number">{number}</div>
      <div className="content">
        <h2>{year}</h2>
        <a href={link} target="blank">{title}</a>
      </div>
    </div>
  );
};

export default ConferenceItem;
