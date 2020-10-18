import React, { useState as useStateMock } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Input from './input';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Text input', () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /*
   * Lacks coverage but it causes `Maximum call stack size exceeded` error
   */

  // it('Loads mocked useState 3 times', () => {
  //   jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  //   renderer.create(<Input />).toJSON();
  //   expect(setState).toHaveBeenCalledTimes(3);
  // });
});
