import React from 'react';
import GMap from './GMap.js';
import renderer from 'react-test-renderer';

it('header renders correctly', () => {
  const tree = renderer
    .create(<GMap/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});