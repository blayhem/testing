import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Main, { getText } from './main';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Main
      stage={0}
      error={false}
      cats={null}
      setStage={() => {}}
      setError={() => {}}
      postData={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders correctly', () => {
  const tree = renderer
    .create(
      <Main
        stage={0}
        error={false}
        cats={null}
        setStage={() => {}}
        setError={() => {}}
        postData={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders counter', () => {
  const main = shallow(
    <Main
      stage={3}
      error={false}
      cats={42}
      setStage={() => {}}
      setError={() => {}}
      postData={() => {}}
    />
  );
  const counter = main.find({ number: 42 }).render().text();
  expect(counter).toBe('42 cats detected');
});

it('Clicks "try again" button', () => {
  const setError = jest.fn();

  const main = shallow(
      <Main
        stage={2}
        error={true}
        cats={null}
        setStage={() => {}}
        setError={setError}
        postData={() => {}}
      />
  );

  const button = main.find({text: "try again"});
  button.simulate('click');
  expect(setError).toHaveBeenCalledTimes(1);
});

it('Returns the correct title and subtitle', () => {
  expect(getText(1, false)).toEqual({
    title: 'Add a link to follow',
    subtitle: `As Google likes the links we also like links. Please include a link you really like and lets us make magic.`,
  });
  expect(getText(2, false)).toEqual({
    title: 'Gandalf is working',
    subtitle: `This will take some time. Do you know Coldplay, Bruce Springsteen or The cars have a song called magic?`,
  });
  expect(getText(2, true)).toEqual({
    title: 'Sorry, shit happens',
    subtitle: `Gandalf is getting old. His magic tricks aren't good enough. Please, try again with Harry Potter.`,
  });
  expect(getText(3, false)).toEqual({
    title: 'Great news!',
    subtitle: `Gandalf did the right work. Please, use this report with responsibility, the power is on the details.`,
  });
});
