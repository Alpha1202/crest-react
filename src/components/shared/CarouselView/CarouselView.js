import React from 'react';
import Carousel from '../../carousel';
import { Link } from "react-router-dom";

const CarouselView = () => (
    <div id="right">
    <div id="showcase">
      <div className="showcase-content ">
        <Carousel>
        <div className="showcase-text slide">
          <h1>
            <b>Welcome To Banka App</b>
          </h1>
          <h4>
            Banka is a light-weight core banking application. It is Relaible,
            fast and very convenient
          </h4>
        </div>
        <div className="showcase-text slide">
          <h1>
            <b>Our Services</b>
          </h1>
          <h4>
            We pride ourselves with delivering super-fast core banking services
            to you.We are reliable, you can always count on us, and we care
            about your financial needs
          </h4>
        </div>
        <div className="showcase-text slide">
          <h1>
            <b>About Us</b>
          </h1>
          <h4>
            Banka is the leading core banking application accross africa and
            beyond. we are a financial service delivery group and our custmoers
            delight is our watchword
          </h4>
        </div>
        </Carousel>
      </div>
      <div className="showcase-content big">
        <div className="showcase-text">
          <h3>
            <b>Welcome To Banka</b>
          </h3>
          <Link to="/signUp" id="signUp-small" className="primary-btn">
            Sign Up
          </Link>
          <Link to="/login" id="login" className="primary-btn">
            login
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CarouselView;