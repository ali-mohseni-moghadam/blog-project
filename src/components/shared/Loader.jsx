import React from "react";

import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <TailSpin
        height="100"
        width="100"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClassName
      />
    </div>
  );
};

export default Loader;
