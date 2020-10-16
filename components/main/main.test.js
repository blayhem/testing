import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Main from './main';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
