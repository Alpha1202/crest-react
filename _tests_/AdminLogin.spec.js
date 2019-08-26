import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { LoginAdmin } from '../src/components/Registration/adminLogin';

const mockStore = configureMockStore();

describe('App', () => {
    const props = {
    adminLogin: jest.fn(),
    auth: {
        staff: '',
        client: '',
        redirect: '',
    }
      };
    let app;
    let store;
    beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

      app = shallow(<LoginAdmin store={store} {...props} />);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
    it('Simulates an onchange event on form password input', () => {
        const event = {
          target: {
            id: 'password',
            value: 'password',
            name: 'password',
          },
        };
        app.find('Input').at(1).simulate('change', event);
});
it('Simulates a form submit event', () => {
    app.setState({
      loginDetails: {
        email: 'test@gmail.com',
      },
      password: {
        password: 'password',
      },
    });
    app.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
})