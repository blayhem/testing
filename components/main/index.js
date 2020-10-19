import { connect } from 'react-redux';
import Component from './main';
import { actions, selectors } from 'providers/api';

export default connect(
  (state) => ({
    stage: selectors.getStage(state),
    error: selectors.getMagicError(state),
    cats: selectors.getCatsNumber(state),
    url: selectors.getUrl(state),
  }),
  {
    setStage: actions.setStage,
    setError: actions.setError,
    postData: actions.postData,
  }
)(Component);
