import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Image = ({ alt, src }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Zoom>
        <img alt={alt} src={src} width="600" />
      </Zoom>
    </div>
  );
};

export default Image;
