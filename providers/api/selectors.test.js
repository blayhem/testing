import { getUrl, getStage, getMagicError, getCatsNumber } from './selectors';

describe('API selectors', () => {
  it('should return the url from the state', () => {
    expect(getUrl({ url: 'url' })).toEqual('url');
  });

  it('should return the application stage from the state', () => {
    expect(getStage({ stage: 2 })).toEqual(2);
  });

  it('should return the saved error from the state', () => {
    expect(getMagicError({ error: true })).toBeTrue;
  });

  it('should return the number of cats from the state', () => {
    expect(getCatsNumber({ cats: 13 })).toEqual(13);
  });
});
