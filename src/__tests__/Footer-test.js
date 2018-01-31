import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../components/Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should render footer', () => {
    const wrapper = shallow(<Footer />);
    const footer = wrapper.find('footer');
    expect(footer.hasClass('text-center')).toBeTruthy();
    expect(footer.find('p')).toHaveLength(1);
    expect(footer.find('p').text()).toEqual('Made with love and logic by: Dikaeinstein');
  });
});
