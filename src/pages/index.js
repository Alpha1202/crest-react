import React from "react";
import "../styles/homepage.css";
import CarouselView from '../components/shared/CarouselView/CarouselView';
import SigninView from '../components/signinView/SigninView';



const Index = () => (
  <div id="wrapper">
  <CarouselView />
  <SigninView />
</div>
)


export default Index;
