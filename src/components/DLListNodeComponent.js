import React from "react";

const DLListNodeComponent = ({ value }) => {
  console.log(value);
  return (
    <div className="dllistnode" data-key={value} title={value}>
      <div className="arrows">
        <div className="arrow">--→</div>
        <div className="arrow back-arrow">←--</div>
      </div>
      <div className="prev" />
      <div className="value">{value}</div>
      <div className="next" />
    </div>
  );
};

export default DLListNodeComponent;
