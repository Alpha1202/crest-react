import { defaultUrl } from  '../config/config.json';

const signIn = (type = 'signin', userData) => {

    const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };

      return window
      .fetch(`${defaultUrl}/auth/${type}`, config)
      .then(resp => resp.json())
      .then(resp => resp)
      .catch(err => err);
  };

const signUp = (type = 'signup', userData) => {

    const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };

      return window
      .fetch(`${defaultUrl}/auth/${type}`, config)
      .then(resp => resp.json())
      .then(resp => resp)
      .catch(err => err);
  };
const adminSignIn = (type='signin', userData) => {

    const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };

      return window
      .fetch(`${defaultUrl}/users/${type}`, config)
      .then(resp => resp.json())
      .then(resp => resp)
      .catch(err => err);
  };

  const logOut = () => {
    localStorage.clear()
    window.location = '/';
  };
  
  export default {
    signIn,
    signUp,
    logOut,
    adminSignIn
  };