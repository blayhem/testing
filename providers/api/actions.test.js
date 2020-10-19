import slice, { postData } from './actions';

const { actions } = slice;

describe('actions', () => {
  it('should create an action to set the url', () => {
    const expectedAction = {
      type: 'api/setURL',
      payload: 'url',
    };
    expect(actions.setURL('url')).toEqual(expectedAction);
  });

  it('should create an action to set the application stage', () => {
    const expectedAction = {
      type: 'api/setStage',
      payload: 2,
    };
    expect(actions.setStage(2)).toEqual(expectedAction);
  });

  it('should create an action to set an error', () => {
    const expectedAction = {
      type: 'api/setError',
      payload: true,
    };
    expect(actions.setError(true)).toEqual(expectedAction);
  });

  it('should create an action to set the number of cats', () => {
    const expectedAction = {
      type: 'api/setCatsNumber',
      payload: 42,
    };
    expect(actions.setCatsNumber(42)).toEqual(expectedAction);
  });

  it('should fetch the API', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ number: 42}),
    }));
  
    const cats = await postData()(
      () => {} // dispatch
    );
    expect(cats.payload).toEqual(42);
    global.fetch.mockClear();
    delete global.fetch;
  });

  it("returns null when exception", async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject("API is down"));
  
    const cats = await postData()(() => {});
    expect(cats.payload).toEqual(null);
    global.fetch.mockClear();
    delete global.fetch;
  });
});
