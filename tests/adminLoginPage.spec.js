import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/pages/adminLogin';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
    
  });
})