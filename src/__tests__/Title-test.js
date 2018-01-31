import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../components/Title';

configure({ adapter: new Adapter() });

describe('Title', () => {
  it('should render header', () => {
    const wrapper = shallow(<Title />);
    const h3 = wrapper.find('h3');
    expect(h3).toHaveLength(1);
    expect(h3.text()).toEqual('Tic Tac Toe');
  });
});
