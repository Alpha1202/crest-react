import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('renders a Provider component', () => {
    expect(app.find('Provider').length).toBe(1);
  });
  it('renders a BrowserRouter component', () => {
    expect(app.find('BrowserRouter').length).toBe(1);
  });
  it('renders a Switch component', () => {
    expect(app.find('Switch').length).toBe(1);
  });
  it('renders a Route component', () => {
    expect(app.find('Route').length).toBe(5);
  });
  it('renders a Redirect component', () => {
    expect(app.find('Redirect').length).toBe(1);
  });
  it('renders snapshot uccessfully', () => {
    expect(app).toMatchSnapshot();
  });
})