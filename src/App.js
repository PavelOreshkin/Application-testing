import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUsers } from './redux/actions';

class App extends Component {
  state = {
    searchName: ''
  };

  handleSearch = (e) => {
    const value = e.target.value;
    this.setState({ searchName: value });
  };

  handleSubmit = () => {
    this.props.getUsers(this.state.searchName);
  };

  render() {
    const userList = <ul>
      {this.props.users
        && this.props.users.map(user => <li key={user.login}>{user.login}</li>)}
    </ul>;

    return (
      <>
        <h1>Введите имя пользователя</h1>
        <input type="text" onChange={(e) => this.handleSearch(e)} />
        <button onClick={this.handleSubmit}>Искать</button>
        {
          this.props.isFetching
            ? <h1>Загрузка...</h1>
            : (this.props.error) ? <h1>Ошибка</h1> : userList
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  isFetching: state.isFetching,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: (name) => dispatch(fetchUsers(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);