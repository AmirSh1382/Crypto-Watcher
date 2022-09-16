import React from 'react';

// Components
import Layout from './components/layout/Layout';
import Landing from './components/Landing';

// Redux
import { Provider } from 'react-redux';
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Landing />
      </Layout>
    </Provider>
  );
};

export default App;