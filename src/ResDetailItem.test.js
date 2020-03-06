import React from 'react';
import ResDetailItem from './ResDetailItem.js';
import renderer from 'react-test-renderer';

it('header renders correctly', () => {
  const tree = renderer
    .create(<ResDetailItem/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});