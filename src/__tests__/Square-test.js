import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from '../components/Square';

// Setup
configure({ adapter: new Adapter() });

describe('Square', () => {
  it('should render button', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Square value="X" hasStarted={false} onClick={mockClick} />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('clickable', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Square value="X" hasStarted={false} onClick={mockClick} />);
    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
