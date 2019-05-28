import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import addUsersReducer from './reducer';

let store = createStore(addUsersReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;

