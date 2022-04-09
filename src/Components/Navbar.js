import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styling/navbar.css";
import "../assets/kappa.png"


const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => { // log out function settings
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => { // "search" button settings
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div className="navbar">
      <h1 className="navbar__header">Green Apple Blog 💬</h1>
      <div className = "iamge">
        <img src = {require('../assets/pepega.jpeg').default} alt = "pepega" height = {60}/>
      </div>
      {isSignedIn && ( // check whether the a user has signed in
        <div className="blog__search">
          <input // search box settings
            className="search"
            placeholder="Search for a blog"
            value={inputValue} // use user input
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar__user__data">
          <Avatar // user avatar (google profile here)
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout // google log out function
            clientId="669762359126-h8lhav4u266kjmd3ink1jir297hv5f6j.apps.googleusercontent.com"
            render={(renderProps) => ( // log out button settings
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available</h1>
      )}
    </div>
  );
};

export default Navbar;