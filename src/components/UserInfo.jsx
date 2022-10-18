import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropDown";
import Footer from "./Footer";

const UserInfo = ({
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
    <div className="userInfo">
      <DropDown
        isDark={isDark}
        handleCaretClick={handleCaretClick}
        showCaretDown={showCaretDown}
        userData={userData}
        logout={logout}
      />
      <div className={`info-details ${darkMode()}`}>
        <h1>Personal info</h1>
        <p>Basic info, like your name and photo</p>
        <div className="details">
          <div className="edit">
            <div className="title">
              <h1>Profile</h1>
              <p>Some info may be visible to other people</p>
            </div>
            <Link className="edit-button" to="/edit">
              Edit
            </Link>
          </div>
          <div className="data">
            <p>Photo</p>
            <img
              src={
                userData.photo
                  ? userData.photo
                  : "https://graph.facebook.com/114073124813090/picture"
              }
              alt="user"
            />
          </div>
          <div className="data">
            <p>Name</p>
            <h3>{userData.name ? userData.name : "No name yet"}</h3>
          </div>
          <div className="data">
            <p>BIO</p>
            <h3>{userData.bio ? userData.bio : "No bio yet"}</h3>
          </div>
          <div className="data">
            <p>PHONE</p>
            <h3>{userData.phone ? userData.phone : "No phone number yet"}</h3>
          </div>
          <div className="data">
            <p>EMAIL</p>
            <h3>{userData.email ? userData.email : "No email yet"}</h3>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
