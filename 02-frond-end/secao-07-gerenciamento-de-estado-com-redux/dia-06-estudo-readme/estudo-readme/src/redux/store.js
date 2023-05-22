import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';
import { submitLogin } from './actions';

const store = createStore(submitLogin, composeWithDevTools());

export default store

