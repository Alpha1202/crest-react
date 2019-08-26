import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { TransactionDetails } from '../src/components/Transactions/TransactionDetails';

const mockStore = configureMockStore();

describe('App', () => {
    const props = {
    transactionDetails: jest.fn(),
    account: {
        accountnumber: '',
    }
      };
    let app;
    let store;
    beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

      app = shallow(<TransactionDetails store={store} {...props} />);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
})