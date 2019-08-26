import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/shared/Buttons/Button';


describe('App', () => {
    const props = {
    value: '',
    id:  '',
    className:  '',
    onClick: jest.fn()
    }
    let app;
    beforeEach(() => {
      app = shallow(<App {...props}/>);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
})