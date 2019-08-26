import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/userDashboard/SideNavBar';

describe('App', () => {
    const props = {
        history: jest.fn()
    }
    let app;
    beforeEach(() => {
      app = shallow(<App {...props}/>);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
})