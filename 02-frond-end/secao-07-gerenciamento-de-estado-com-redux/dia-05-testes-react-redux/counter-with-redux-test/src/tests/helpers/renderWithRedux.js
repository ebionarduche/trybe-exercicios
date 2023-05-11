import { Provider } from "react-redux";
import counterReducer from "../redux/reducers/counterReducer";
import { render } from '@testing-library/react'
import { legacy_createStore as createStore, combineReducers, } from "redux";


const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
    combineReducers({ counterReducer }),
    initialState),
    
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux