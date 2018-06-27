import React from "react";

const BinaryNodeComponent = props => {
  const voidClass =
    props.value === undefined || props.value === "" ? " void" : "";
  let leftStyle = {
    left: "-20vw",
    width: "20vw",
    MozTransform: "rotate(-108deg)",
    MozTransformOrigin: "100% 0%",
    WebkitTransform: "rotate(-108deg)",
    WebkitTransformOrigin: "100% 0%",
    transform: "rotate(-18deg)",
    transformOrigin: "100% 0"
  };
  let rightStyle = {
    right: "0vw",
    width: "20vw",
    MozTransform: "rotate(-160deg)",
    MozTransformOrigin: "100% 0%",
    WebkitTransform: "rotate(-160deg)",
    WebkitTransformOrigin: "100% 0%",
    transform: "rotate(-160deg)",
    transformOrigin: "100% 0"
  };
  if (props.level === 2) {
    leftStyle = {
      left: "-10vw",
      width: "10vw",
      MozTransform: "rotate(-40deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-40deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-40deg)",
      transformOrigin: "100% 0"
    };
    rightStyle = {
      right: "0vw",
      width: "10vw",
      MozTransform: "rotate(-140deg)",
      MozTransformOrigin: "100% 0%",
      WebkitTransform: "rotate(-140deg)",
      WebkitTransformOrigin: "100% 0%",
      transform: "rotate(-140deg)",
      transformOrigin: "100% 0"
    };
  }

  return (
    <div
      className={`binarynode${voidClass}`}
      data-key={props.value}
      title={props.value}
      style={props.style}
    >
      <div className="round">
        <div className="value" title={props.value}>
          {props.dataKey}
        </div>
        {props.left && <div className="left" style={leftStyle} />}
        {props.right && <div className="right" style={rightStyle} />}
      </div>
    </div>
  );
};

export default BinaryNodeComponent;
