import sages from './sagas';
import * as reducers from './reducers';
import { createStoreFromSagesAndReducers, autoLocalStorage } from '../utils/reduxHelper';
const store = createStoreFromSagesAndReducers(sages, reducers);
autoLocalStorage(store, 'saga-test-local', ['user']);

export default store;