import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Input from './input';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
