import React from 'react';
import renderer from 'react-test-renderer';

import SignupScreen from '../../screens/login/Signup';

describe('tests for Sign up screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignupScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<SignupScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
