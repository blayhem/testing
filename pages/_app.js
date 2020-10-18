import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from 'providers/store';
import 'styles/globals.scss';

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};

App.defaultProps = {
  pageProps: {},
};

export default App;
