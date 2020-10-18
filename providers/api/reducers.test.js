import slice from './actions';
import initialState from './initial-state';

const { reducer } = slice;

describe('API reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle api/setURL', () => {
    expect(
      reducer(
        {},
        {
          type: 'api/setURL',
          payload: 'url',
        }
      )
    ).toEqual({
      url: 'url',
    });
  });
  
    it('should handle api/setStage', () => {
      expect(
        reducer(
          {},
          {
            type: 'api/setStage',
            payload: 2,
          }
        )
      ).toEqual({
        stage: 2,
      });
    });
  
    it('should handle api/setError', () => {
      expect(
        reducer(
          {},
          {
            type: 'api/setError',
            payload: true,
          }
        )
      ).toEqual({
        error: true,
      });
    });
  
    it('should handle api/setCatsNumber', () => {
      expect(
        reducer(
          {},
          {
            type: 'api/setCatsNumber',
            payload: 42,
          }
        )
      ).toEqual({
        cats: 42,
      });
    });
});
