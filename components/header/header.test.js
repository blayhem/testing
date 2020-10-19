import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './header';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should handle the click event', () => {
  const setStage = jest.fn();
  const header = shallow(
    <Header setStage={setStage} />
  );
  header.simulate('click');
  expect(setStage).toHaveBeenCalledTimes(1);
});
