import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { http } from "./components/utils/httpService";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import {
  handleGithubSigninClick,
  handleTwitter,
  ongithubFailure,
  handleGoogleSignin,
  ongithubSuccess,
  signInWithFacebook,
} from "./components/utils/socialsSignin";
import {
  setDark,
  handleCaretClick,
  handleEmail,
  handleFile,
  handlePassword,
  handledataEdit,
  logout,
  handleSubmit,
} from "./components/utils/helpers";

import Loader from "./components/loader";
import "./App.css";
import { editRoute } from "./components/routes/edit";
import { loginRoute } from "./components/routes/login";
import { profileRoute } from "./components/routes/profile";
import { registerRoute } from "./components/routes/register";
function App() {
  const [isDark, setIsdark] = useState(() =>
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const [showCaretDown, setShowCaretDown] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("token") ? true : false
  );
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedBio, setEditedBio] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    photo: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function darkMode() {
    return isDark ? "dark" : "";
  }

  useEffect(() => {
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    const reloadData = async () => {
      if (token) {
        try {
          const result = await http.get("http://localhost:3030/reload", {
            headers: {
              "x-auth-token": token,
            },
          });
          setUserData(result.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setIsAuthenticated(false);
          navigate('/', { replace: true })
          toast.error("Something failed!");
          setLoading(false);
        }
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    reloadData();
  }, []);

  console.log(import.meta.env.VITE_SOME_KEY) 
  console.log(import.meta.env) 

  return (
    <>
      <ToastContainer autoClose={10000} />
      {loading && <Loader isDark={isDark} />}
      <div className={`container ${darkMode()}`}>
        <Nav setDark={setDark(setIsdark, isDark)} isDark={isDark} />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/profile" />
              ) : (
                registerRoute(
                  isDark,
                  handleEmail,
                  setRegisterEmail,
                  setLoginEmail,
                  setEditedName,
                  setEditedBio,
                  setEditedPhone,
                  setEditedEmail,
                  setEditedPassword,
                  registerPassword,
                  registerEmail,
                  setUserData,
                  setIsAuthenticated,
                  setLoading,
                  loginEmail,
                  loginPassword,
                  setRegisterPassword,
                  setLoginPassword,
                  handlePassword,
                  signInWithFacebook,
                  handleTwitter,
                  handleSubmit,
                  handleGoogleSignin,
                  handleGithubSigninClick,
                  ongithubFailure,
                  ongithubSuccess
                )
              )
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/profile" />
              ) : (
                loginRoute(
                  isDark,
                  handleEmail,
                  setRegisterEmail,
                  setLoginEmail,
                  setEditedName,
                  setEditedBio,
                  setEditedPhone,
                  setEditedEmail,
                  setEditedPassword,
                  registerPassword,
                  registerEmail,
                  setUserData,
                  setIsAuthenticated,
                  setLoading,
                  loginEmail,
                  loginPassword,
                  setRegisterPassword,
                  setLoginPassword,
                  handlePassword,
                  signInWithFacebook,
                  handleTwitter,
                  handleSubmit,
                  handleGoogleSignin,
                  handleGithubSigninClick,
                  ongithubFailure,
                  ongithubSuccess
                )
              )
            }
          />
          <Route
            path="/profile"
            element={
              !isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                profileRoute(
                  handleCaretClick,
                  showCaretDown,
                  isDark,
                  setShowCaretDown,
                  userData,
                  logout,
                  setIsAuthenticated,
                  setUserData,
                  setRegisterEmail,
                  setRegisterPassword,
                  setLoginEmail,
                  setLoginPassword
                )
              )
            }
          />
          <Route
            path="/edit"
            element={
              !isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                editRoute(
                  handleCaretClick,
                  setShowCaretDown,
                  showCaretDown,
                  isDark,
                  userData,
                  logout,
                  setIsAuthenticated,
                  setUserData,
                  setRegisterEmail,
                  setRegisterPassword,
                  setLoginEmail,
                  setLoginPassword,
                  handleEmail,
                  setEditedName,
                  setEditedBio,
                  setEditedPhone,
                  setEditedEmail,
                  setEditedPassword,
                  handleFile,
                  setLoading,
                  editedName,
                  editedBio,
                  editedPassword,
                  editedPhone,
                  editedEmail,
                  handledataEdit,
                  navigate
                )
              )
            }
          />

          <Route path="*" element={<NotFound isDark={isDark} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
