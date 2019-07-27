import React from "react";
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import store from '../store/store';
import Index from "../pages/index";
import AdminLogin from "../pages/adminLogin";
import SignUp from "../pages/signUp";
import UserDashboard from "../pages/user-dashboard";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <>
      <Notifications />
      <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/userDashboard" component={UserDashboard} />
        <Redirect to="/error" />
      </Switch>
      </Router>
      </>
    </Provider>
  );
};

export default App;
