import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserCard from './components/userCard.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      user: {},
      followers: []
  }
  }

  componentDidMount(){
    this.fetchUsers()
    this.fetchFollowers()
  }

fetchUsers = () => {
  fetch('https://api.github.com/users/hannahtuttle')
  .then(response => {
    return response.json()
  })
  .then(response => {
    //if(response === null){}
    return this.setState({user: response}),
    console.log('this.state.user', this.state.user)
    })
  .catch((err) => 
    console.log(err))
}

fetchFollowers = () => {
  fetch('https://api.github.com/users/hannahtuttle/followers')
  .then(response => {
    return response.json()
  })
  .then(response => {
    return this.setState({followers: response}),
    console.log("followers",this.state.followers)
  })
  .catch(err => console.log('error with followers api', err))
}

  render(){
  return (
    <div className="App">
      <UserCard user={this.state.user}/>
      {this.state.followers.map(person => 
        <UserCard user={person}/>
      )}
    </div>
  );
}}

export default App;
