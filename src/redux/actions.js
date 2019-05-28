export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

const fetchUsersRequest = () => (
  {
    type: FETCH_USERS_REQUEST
  }
);

const fetchUsersSuccess = (users) => (
  {
    type: FETCH_USERS_SUCCESS,
    users
  }
);

const fetchUsersFail = () => (
  {
    type: FETCH_USERS_FAIL
  }
);

export const fetchUsers = (name) => (
  (dispatch) => {
    dispatch(fetchUsersRequest())

    return fetch(`https://api.github.com/search/users?q=${name}`)
      .then(res => res.json())
      .then(users => dispatch(fetchUsersSuccess(users.items)))
      .catch(() => dispatch(fetchUsersFail()))
  }
)


