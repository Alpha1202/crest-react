import React from "react";

import Index from "./pages/index";
import AdminLogin from "./pages/adminLogin";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/adminLogin" component={AdminLogin} />
      </Switch>
    </>
  );
};

export default App;
