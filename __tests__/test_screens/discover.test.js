import React from 'react';
import renderer from 'react-test-renderer';

import DiscoverScreen from '../../screens/discover/Discover';

describe('tests for Discover screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DiscoverScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<DiscoverScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});


