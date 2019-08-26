import React, { Component } from "react";
import "../styles/homepage.css";
import CarouselView from '../components/shared/CarouselView/CarouselView';
import SignUpView from "../components/signinView/signupView";


const signUp = () => (
      <div id="wrapper">
        <CarouselView />
        <SignUpView />
      </div>
  );

export default signUp;
