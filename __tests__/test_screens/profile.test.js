import React from 'react';
import renderer from 'react-test-renderer';

import ProfileScreen from '../../screens/profile/Profile';

describe('tests for Profile screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<ProfileScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

