import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Todos from './components/todos';
import TodoDetails from './components/todoDetails.jsx';
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
        <Router>
          <header className='App-header'>
            <strong><i>Routage todo list</i></strong>
              <Link to={'/todos'}>todos</Link>
              <Link to="/about" >About</Link>
              <Link to="/contact" >Contacts</Link>
          </header>
          <Route exact path="/todos" render={() => (
            <Todos todos={this.state.todos}/>
          )} />
          <Route path="/todos/:id" component={TodoDetails} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
