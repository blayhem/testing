import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Breadcrumbs from './breadcrumbs.jsx';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumbs />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const tree = renderer.create(<Breadcrumbs stage={2} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders error case', () => {
  const tree = renderer.create(<Breadcrumbs error />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Expects the propTypes to be respected', () => {
  console.error = jest.fn();
  renderer.create(<Breadcrumbs stage={[]} />).toJSON();
  expect(console.error).toHaveBeenCalled();
});
