// export { default } from './header';
import { connect } from 'react-redux';
import Component from './header';
import { actions } from 'providers/api';

export default connect(
  null,
  {
    setStage: actions.setStage,
  }
)(Component);
