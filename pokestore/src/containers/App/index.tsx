import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '../../routes';
import { store, persistor } from '../../store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='app'>
          <Router>
            <Routes/>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}