import React from "react";
import ImageLink from "../shared/Links/imageLinks";
import LoginAdmin  from '../Registration/adminLogin';

const AdminSigninView = () => (
  <div id="left" className="left-signin">
    <div id="signin">
      <ImageLink />
      <LoginAdmin />
    </div>
  </div>
);

export default AdminSigninView;
