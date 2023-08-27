import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../../screens/login/Login';

describe('tests for login screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 2 children', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});


