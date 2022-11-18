import React from "react";

const SectionsDesignationItem = ({style, number, last}) => {
  return (
    <div className="designation" style={style}>
      <div className="number">{number}</div>
      {!last && <div className="line"></div>}
    </div>
  );
};

export default SectionsDesignationItem;
