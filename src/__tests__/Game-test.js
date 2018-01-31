import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../components/Game';

describe('Game', () => {
  it('Changes Board state when clicked', () => {
    const component = renderer.create(<Game />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
