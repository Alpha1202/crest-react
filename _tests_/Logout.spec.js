import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import auth from '../src/reducers/auth.reducer';
import configureMockStore from 'redux-mock-store';

import App from '../src/components/Registration/Logout';
import Store from '../src/store/store';
const mockStore = configureMockStore();

describe('App', () => {
    const props = {
    history : jest.fn(),
    onclick: jest.fn()
      };
    let app;
    let store;
    beforeEach(() => {
   
    store = mockStore(Store);

      app = shallow(<App store={store} {...props} />);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    })
})