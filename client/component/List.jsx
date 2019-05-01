import React, { Component } from "react";
import ListEntry from "./ListEntry.jsx";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      listName: "Todos"
    };
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    axios
      .get('/api/todoList', { params: { listName: this.state.listName } })
      .then(({ data }) => { 
        this.setState({ todos: data })
      })
      .catch(err => console.log(err));
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, todos, listName } = this.state;
    axios
      .post('/api/todoList', { todo, listName: this.state.listName })
      .then(this.fetchTodos())
      .catch(err => console.log(err));
  }

  deleteTodo(index) {
    axios
      .delete('/api/todoList', {
        params: { index, listName: this.state.listName }  
      })
    .then(this.fetchTodos())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          Add Todo: <input onKeyUp={this.handleInput} />
        </form>
        <br />
        <div>
          {this.state.todos.map(todo => (
            <ListEntry todo={todo} delete={this.deleteTodo} />
          ))}
        </div>
      </div>
    );
  }
}

export default List;