import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = { user: {}}
  }

  componentDidMount(){
    this.fetchUsers()
  }

fetchUsers = () => {
  fetch('https://api.github.com/users/hannahtuttle')
  .then(response => {
    return response.json()
  })
  .then(response => {
    //if(response === null){}
   return this.setState({user: response}),
   //console.log(this.state.user),
    console.log(this.state.user)
    })
  .catch((err) => 
    console.log(err))
}

  render(){
  return (
    <div className="App">
     
    </div>
  );
}}

export default App;
