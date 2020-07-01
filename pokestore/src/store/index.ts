import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import appReducers from '../reducers';

const rootReducer = (state: any, action: any) => appReducers(state, action)

const persitConfig = {
  key: 'pokestore',
  storage,
  blacklist: ['auth', 'content']
}

const persistedReducer = persistReducer(persitConfig, rootReducer);

const store = createStore(
  persistedReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor }