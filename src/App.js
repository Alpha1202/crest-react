import React from "react";

import Index from "./pages/index";
import AdminLogin from "./pages/adminLogin";
import SignUp from "./pages/signUp";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
