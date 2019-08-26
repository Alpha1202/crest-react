import React from 'react';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import store from '../store/store';
import Index from '../pages/index';
import AdminLogin from '../pages/adminLogin';
import SignUp from '../pages/signUp';
import UserDashboard from '../pages/user-dashboard';
import AdminDashboard from '../pages/admin-dashboard/Dashboard';


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <>
      <Notifications />
      <Router>
      <Switch>
        <Route exact path='/' render={() => <Index />} />
        <Route path='/adminLogin' render={() => <AdminLogin />} />
        <Route path='/signup' render={() => <SignUp />} />
        <Route path='/userDashboard' render={({history}) => <UserDashboard history={history} />} />
        <Route path='/adminDashboard' render={() => <AdminDashboard />} />
        <Redirect to='/error' />
      </Switch>
      </Router>
      </>
    </Provider>
  );
};

export default App;
