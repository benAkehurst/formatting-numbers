import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Formatter from './Formatter';

configure({ adapter: new Adapter() });

describe('<Formatter />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Formatter></Formatter>);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a HeaderWrapper child component', () => {
    expect(wrapper.props().children[0].props.className).toEqual(
      'HeaderWrapper'
    );
  });

  it('should have a InputWrapper child component', () => {
    expect(wrapper.props().children[1].props.className).toEqual('InputWrapper');
  });

  it('should have a DisplayWrapper child component', () => {
    expect(wrapper.props().children[2].props.className).toEqual(
      'DisplayWrapper'
    );
  });
});
