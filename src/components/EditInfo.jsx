import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropDown";
import Footer from "./Footer";

const EditInfo = ({
  handleCaretClick,
  showCaretDown,
  isDark,
  userData,
  logout,
  handleInputs,
  handleFile,
  handledataEdit,
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
      <div className={`holder ${darkMode()}`}>
        <Link to="/profile" className="return">
          <i className="fa-sharp fa-solid fa-angle-left"></i>
          <p>Back</p>
        </Link>
        <div className="edit-inputs">
          <h1>Change info</h1>
          <p>Changes will be reflected to every services</p>
          <div className="changePhoto">
            <div className="camera">
              <label htmlFor="file-input">
                <img
                  src={
                    userData.photo
                      ? userData.photo
                      : "https://graph.facebook.com/114073124813090/picture"
                  }
                  alt=""
                />
              </label>
              <i className="fa-sharp fa-solid fa-camera"></i>
            </div>
            <input
              id="file-input"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleFile}
              style={{ display: "none" }}
              type="file"
            />
            <label htmlFor="file-input">
              <p>CHANGE PHOTO</p>
            </label>
          </div>
          <div className="details">
            <p>Name</p>
            <input
              onChange={(e) => handleInputs(e, "editName")}
              type="text"
              placeholder="Enter your name..."
            />
          </div>
          <div className="details bio">
            <p>Bio</p>
            <input
              onChange={(e) => handleInputs(e, "editBio")}
              type="text"
              placeholder="Enter your bio..."
            />
          </div>
          <div className="details">
            <p>Phone</p>
            <input
              onChange={(e) => handleInputs(e, "editPhone")}
              type="tel"
              placeholder="Enter your phone..."
            />
          </div>
          <div className="details">
            <p>Email</p>
            <input
              onChange={(e) => handleInputs(e, "editEmail")}
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="details">
            <p>Password</p>
            <input
              onChange={(e) => handleInputs(e, "editPassword")}
              type="password"
              placeholder="Enter your new password..."
            />
          </div>
          <button onClick={handledataEdit}>Save</button>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
