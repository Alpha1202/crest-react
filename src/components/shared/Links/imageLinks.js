import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../../../images/logo.png';
import "../../../styles/homepage.css";

const ImageLink = () => {
  return (
    <div className="logo">
    <Link to="/">
      <img src={image} alt="logo" />
    </Link>
  </div>
  );
};


export default ImageLink;