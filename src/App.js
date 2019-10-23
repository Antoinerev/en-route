import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from './components/todos';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';

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
        <Router>
          {/*<Todos todos={this.state.todos}/>*/}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
