import React from "react";

const Nav = ({ setDark, isDark }) => {
  function darkMode() {
    return isDark ? "dark" : "";
  }

  return (
    <div className={`header ${darkMode()}`}>
      <div className="logo">
        <img
          src="/images/devchallenges-light.svg"
          className="logo-image"
          alt=""
        />
        <p>devchallenges</p>
      </div>
      <div className="toggleMode">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={setDark}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </div>
  );
};

export default Nav;
