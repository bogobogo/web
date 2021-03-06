import React from 'react';
import { shallow } from 'enzyme';
import { Error } from './Notifications';
import renderer from 'react-test-renderer';

describe('Error', () => {
  it('should render correctly', () => {
    const msg = 'Foo bar\nBaz qux';
    const wrapper = renderer.create(<Error message={msg} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onRemove when the close button is clicked', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Error message="foo" onRemove={spy} />);

    wrapper.find('.bblfsh-notification__close-button').simulate('click');
    expect(spy.mock.calls.length).toBe(1);
  });
});
