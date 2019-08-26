import React from "react";
import ImageLink from "../shared/Links/imageLinks";
import Signup from '../Registration/SignUp';

const signUpView = () => (
  <div id="left" className="left-signin">
    <div id="signin">
      <ImageLink />
      <Signup />
    </div>
  </div>
);

export default signUpView;
