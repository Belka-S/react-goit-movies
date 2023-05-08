import { Component } from 'react';
import authContext from './context';

export class AuthProvider extends Component {
  state = {
    user: null,
    isLoggedIn: false,
    onLogIn: () => {
      this.setState({ user: 'Mango', isLoggedIn: true });
    },
    onLogOut: () => {
      this.setState({ user: null, isLoggedIn: false });
    },
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    );
  }
}
