import React from "react";
import BinaryNodeComponent from "./BinaryNodeComponent";
const BinaryTreeLevel = props => {
  const width = 100 / Math.pow(2, props.level - 1);
  const style = {
    width: width + "%"
  };
  return (
    <div className="Binary-Tree-Level">
      {props.values &&
        props.values.map((node, key) => (
          <BinaryNodeComponent
            key={`${props.level}_${key}`}
            style={style}
            value={node.value}
            level={props.level}
            dataKey={node.key}
            left={props.activateArrows && node !== "" && !(node.left === null)}
            right={
              props.activateArrows && node !== "" && !(node.right === null)
            }
          />
        ))}
    </div>
  );
};

export default BinaryTreeLevel;
