import React from "react";
import ConferenceItem from "./ConferenceItem";

import conference_2019 from "../../assets/2019.pdf";
import conference_2020 from "../../assets/2020.pdf";
import conference_2021 from "../../assets/2021.pdf";

import { conferences } from "../../data/conferences";

const PastConferences = () => {
  return (
    <section id="past-conferences">
      <div className="wrapper">
        <h1>Сборники прошлых конференций</h1>
        <div className="container">
          {conferences(conference_2019, conference_2020, conference_2021).map(
            (item, i) => (
              <ConferenceItem
                key={i}
                year={item.year}
                title={item.title}
                number={i + 1}
                link={item.link}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PastConferences;
