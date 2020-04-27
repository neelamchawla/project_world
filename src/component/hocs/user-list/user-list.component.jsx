import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }
    
    componentDidMount() {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({users: data.slice(0,3)}
        ));
      }, 1500);
    }

  render() {
      return this.state.users.length < 1
      ? (
          <h1>Loading...</h1>
        )
      : (
        <div className="container user-list">
            <h1> Users List </h1>
            {
              this.state.users.map(user => (
                <div className="post" key={user.id}>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                </div>
              ))
            }
        </div>
        )
  };
}

export default UserList