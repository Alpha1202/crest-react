import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';
import ImageLink from '../components/shared/Links/imageLinks';
import LoginAdmin from '../components/Registration/adminLogin';
import CarouselView from '../components/shared/CarouselView/CarouselView';
import AdminSigninView from '../components/signinView/AdminSignInView';


const AdminLogin = () => (
      <div id="wrapper">
        <CarouselView />
        <AdminSigninView />
      </div>
);
export default AdminLogin;
