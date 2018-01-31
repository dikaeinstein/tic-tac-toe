import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render button with text', () => {
    const wrapper = shallow(<Button
      onClick={jest.fn()}
      hasStarted={false}
    />);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('Start Game');
  });
  it('is clickable', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Button hasStarted={false} onClick={mockClick} />);
    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
