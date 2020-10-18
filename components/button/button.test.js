import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from './button';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const textButton = renderer.create(<Button text="send us" />).toJSON();
  expect(textButton).toMatchSnapshot();
  const iconButton = renderer.create(<Button icon="/icons/error.svg" />).toJSON();
  expect(iconButton).toMatchSnapshot();
});
