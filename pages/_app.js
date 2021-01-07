import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Head from 'next/head';

import store from 'providers/store';
import 'styles/globals.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Cat Counter</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};

App.defaultProps = {
  pageProps: {},
};

export default App;
