import { connect } from 'react-redux';
import Component from './main';
import { actions, selectors } from 'providers/api';

export default connect(
  state => ({
    stage: selectors.getStage(state),
    error: selectors.getMagicError(state),
  }),
  {
    setStage: actions.setStage,
  }
)(Component);
