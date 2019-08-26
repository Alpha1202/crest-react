import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/shared/CarouselView/CarouselView';

describe('App', () => {
    let app;
    beforeEach(() => {
      app = shallow(<App />);
    });
  
    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
})