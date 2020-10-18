import { connect } from 'react-redux';
import Component from './input';
import { actions } from 'providers/api';

export default connect(null, {
  postData: actions.postData,
})(Component);
