import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../components/Board';
import Square from '../components/Square';

configure({ adapter: new Adapter() });

describe('Board', () => {
  it('should render 9 squares', () => {
    const squares = Array(9).fill(null);
    const mockClick = jest.fn();
    const wrapper = shallow(<Board
      squares={squares}
      hasStarted={false}
      onClick={mockClick}
    />);
    const actual = wrapper.find(Square);
    expect(actual).toHaveLength(9);
  });
});
