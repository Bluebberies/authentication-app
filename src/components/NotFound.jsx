import React from "react";

const NotFound = ({ isDark }) => {
  function darkMode() {
    return isDark ? "dark" : "";
  }

  return (
    <div className={`App ${darkMode()}`}>
      <div className="card">
        <h1>Oops! page not found, go back</h1>
      </div>
    </div>
  );
};

export default NotFound;
