import React from "react";
import DotLoader from "react-spinners/ClipLoader";

const Loader = ({ isDark }) => {
  return (
    <div className="spinner-background">
      <DotLoader color={isDark ? "white" : "blue"} />
    </div>
  );
};

export default Loader;
