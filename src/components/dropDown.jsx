import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({
  handleCaretClick,
  showCaretDown,
  isDark,
  userData,
  logout,
}) => {
  function darkMode() {
    return isDark ? "dark" : "";
  }

  return (
    <div className={`dropdown ${darkMode()}`}>
      <img
        src={
          userData.photo
            ? userData.photo
            : "https://graph.facebook.com/114073124813090/picture"
        }
        alt="userPic"
      />
      <p className="name">{userData.name ? userData.name : "User"}</p>
      <div className="dropdown-list">
        <i
          onClick={handleCaretClick}
          className={
            showCaretDown
              ? "fa-sharp fa-solid fa-caret-down arr"
              : "fa-sharp fa-solid fa-caret-up arr"
          }
        ></i>
        <div
          className={
            showCaretDown ? "dropdown-content" : "dropdown-content show"
          }
        >
          <Link
            to="/profile"
            onClick={handleCaretClick}
            className="dropdown-link"
          >
            <i className="fa-solid fa-user"></i>
            <p>My Profile</p>
          </Link>
          <div className="dropdown-link">
            <i className="fa-sharp fa-solid fa-people-group"></i>
            <p>Group Chat</p>
          </div>
          <div className="dropdown-link" onClick={logout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
