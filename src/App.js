import React, {Component} from 'react';

import Todos from './components/todos';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    this.getTodos()
      .then(res => res.json())
      .then(data => {this.setState({todos: data})});
  }
  getTodos() {
    return(fetch('https://jsonplaceholder.typicode.com/todos'));
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Routage todo list
        </header>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
