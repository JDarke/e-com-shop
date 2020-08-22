import React from "react";
import SignIn from "../../Components/SignIn/signin.jsx";
import SignUp from "../../Components/SignUp/signup.jsx"
import "./signinandup.styles.scss";

const SignInAndUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndUpPage;
