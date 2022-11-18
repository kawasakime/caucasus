import React from "react";
import Links from "../Links";

const Accordion = ({ title, text, imgs }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handlerClickAccordion(e) {
    e.target.classList.toggle("active");
    setIsOpen((prev) => !prev);
  }

  const panelStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="accordion">
      <button className="accordion__button" onClick={handlerClickAccordion}>
        {title}
      </button>
      <div className="accordion__panel" style={panelStyle}>
        <p>{text}</p>
        <div className="imgs">
          {imgs.map((img, i) => (
            <img key={i} src={`./assets/img/projects/${img}`} alt="" />
          ))}
        </div>
        <Links />
      </div>
    </div>
  );
};

export default Accordion;
