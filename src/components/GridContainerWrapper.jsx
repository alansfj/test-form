import React from "react";
import "../Sass/GridContainerWrapper.scss";

const GridContainerWrapper = ({ children, columns, gap }) => {
  console.log("children", children);

  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `${columns || `repeat(${children.length}, 1fr)`}`,
        // gridTemplateColumns: `${columns || `repeat(${children.length}, 1fr)`}`,
        columnGap: `${gap || "3rem"}`,
      }}
    >
      {children}
    </div>
  );
};

export default GridContainerWrapper;
