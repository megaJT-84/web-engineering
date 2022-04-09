import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import Logo from "../assets/green apple.jpeg"
import "../styling/home.css";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn); // login function

  const dispatch = useDispatch();
  const login = (response) => { // set up log in response
    console.log(response);
    dispatch(setSignedIn(true)); // log in is true, user is now logged in
    dispatch(setUserData(response.profileObj)); // render user profile (google profile, since using google login)
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      <img src = {Logo} height = {600} width = {650}/>
      {!isSignedIn ? ( 
        <div className="login__message"> 
          <h2>Welcome!</h2> 
          <h1>This is Green Apple blog hub</h1>
          <h3>
            Your go-to choice for daily news feed
          </h3> 
          <GoogleLogin // use google login from 'react-google-login'
            clientId="669762359126-h8lhav4u266kjmd3ink1jir297hv5f6j.apps.googleusercontent.com" // 
            render={(renderProps) => (
              <button // login button settings
                onClick={renderProps.onClick} // click function
                disabled={renderProps.disabled} // disable the button when logged in
                className="login__button"
              >
                Login with Google 
              </button>
            )}
            onSuccess={login} // log the user in
            onFailure={login} // user failed to log in with google account, but still signed in
            isSignedIn={true} // user is still signed in, and able to access the web app even after cutting the homepage
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;

