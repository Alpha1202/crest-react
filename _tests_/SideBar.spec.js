import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { SideBar } from '../src/components/shared/Links/SideBar';

describe('App', () => {
    const props = {
        clicked: '',
        setClicked: jest.fn()
    }
    let app;
    beforeEach(() => {
      app = shallow(<SideBar {...props}/>);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
})