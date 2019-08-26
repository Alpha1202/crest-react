import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { AdminDashboard } from '../src/pages/admin-dashboard/Dashboard';

const mockStore = configureMockStore();

describe('App', () => {
    const props = {
    accounts: {
        allAccounts: jest.fn(),
        activeAccounts: jest.fn(),
        dormantAccounts: jest.fn(),
    }
      };
    let app;
    let store;
    beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

      app = shallow(<AdminDashboard store={store} {...props} />);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
})