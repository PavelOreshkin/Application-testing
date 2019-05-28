import { 
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
 } from "./actions";

const initialState = {
  isFetching: false,
  error: false,
  users: []
}

const addUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, error: false, users: action.users });
    case FETCH_USERS_FAIL:
      return Object.assign({}, state, { isFetching: false, error: true });
    default:
      return state;
  }
}

export default addUsersReducer;
