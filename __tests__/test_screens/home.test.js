import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from '../../screens/home/Home';

describe('tests for Home screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

