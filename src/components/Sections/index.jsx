import React from "react";
import SectionsDesignationItem from "./SectionsDesignationItem";

import { projectsInfo } from "../../data/conferences";
import Accordion from "../PastConferences/Accordion";

const sections = [
  "АНТОЛОГИЯ ПАМЯТНИКОВ ПРАВА НАРОДОВ КАВКАЗА",
  "ПРАВО КАВКАЗСКОЙ ЦИВИЛИЗАЦИИ",
  "НАРОДНАЯ ПАМЯТЬ",
  "СБОРНИКИ НАУЧНО-ПРАКТИЧЕСКИХ КОНФЕРЕНЦИЙ ПО ПРОБЛЕМАМ ГОСУДАРСТВЕННО-ПРАВОВОГО РАЗВИТИЯ НАРОДОВ КАВКАЗА",
  "ИСТОРИЯ ГОСУДАРСТВА И ПРАВА НАРОДОВ КАВКАЗА",
  "ОБЫЧНОЕ ПРАВО НАРОДОВ СЕВЕРНОГО КАВКАЗА",
  "ПАМЯТНИКИ ПРАВА НАРОДОВ КАВКАЗА",
];

const titleColumn = (i) => {
  return {
    gridColumn: i % 2 === 0 ? `1/2` : `3/4`,
    gridRow: `${i + 1}/${i + 2}`,
    textAlign: i % 2 === 0 ? "right" : "left",
  };
};

const designationRow = (i) => {
  return {
    gridRow: `${i + 1}/${i + 2}`,
  };
};

const Sections = () => {
  return (
    <section id="sections">
      <div className="wrapper">
        <h1>Структура проекта</h1>
        <div className="sections__block">
          {sections.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <h2 style={titleColumn(i)}>{item}</h2>
                <SectionsDesignationItem
                  style={designationRow(i)}
                  last={i === sections.length - 1 ? true : false}
                />
              </React.Fragment>
            );
          })}
        </div>
        <div className="info">
          {projectsInfo.map((item, i) => (
            <Accordion
              key={i}
              title={item.title}
              text={item.text}
              imgs={item.imgs}
              data={item.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
