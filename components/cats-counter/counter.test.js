import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Counter from './counter';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter number={28} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const tree = renderer.create(<Counter number={28} />).toJSON();
  expect(tree).toMatchSnapshot();
});
