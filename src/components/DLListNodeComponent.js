import React from "react";

const DLListNodeComponent = props => {
  return (
    <div className="dllistnode" data-key={props.value} title={props.value}>
      {props.prev && (
        <div className="arrows">
          <div className="arrow right-arrow">----&gt;</div>
          <div className="arrow left-arrow">&lt;----</div>
        </div>
      )}
      <div className="prev" />
      <div className="value">{props.value}</div>
      <div className="next" />
    </div>
  );
};

export default DLListNodeComponent;
