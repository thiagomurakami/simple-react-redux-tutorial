import React from 'react'
import _ from 'lodash'
import Link from '../components/Link'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import request from 'superagent'

const SHOW_ALL = "SHOW_ALL"
const SHOW_ACTIVE = "SHOW_ACTIVE"
const SHOW_COMPLETED = "SHOW_COMPLETED"

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // Initial State
    this.state = {
      todos: [],
      filter: SHOW_ALL
    }
    this.id = 0;
    // Assigns "this" value to methods that are not React.Component default methods.
    // Otherwise, you can't call Component methods from inside th
    const classMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    classMethods.forEach((method) => {
      if (typeof this[method] === "function") {
        this[method] = this[method].bind(this)
      }
    });
  }

  componentDidMount() {
    request.get('/api/todos')
          .type('application/json')
          .accept('json')
          .end((err, res) => {
            if (err) {
              console.log('Error!');
            } else {
              let body = JSON.parse(res.text);
              this.setState({todos: body.todos});
              this.id = body.todos.length;
            }
          });
  }

  setFilter (filter) {
    this.setState({ filter });
  }

  addTodo (text) {
    let todos = _.cloneDeep(this.state.todos);
    todos.push({
      id: this.id,
      completed: false,
      text
    })
    this.id++;
    this.setState({todos})
  }

  toggleTodo (id) {
    let todos = _.cloneDeep(this.state.todos);
    todos = _.map(todos, (todo) => {
      if ( todo.id === id ) todo.completed = !todo.completed;
      return todo
    })
    this.setState({todos})
  }

  render () {
    const { filter } = this.state;
    const filteredToDos = _.filter(this.state.todos, (todo) => {
      switch (filter) {
        case SHOW_ACTIVE:
          return !todo.completed;
        case SHOW_COMPLETED:
          return todo.completed;
        case SHOW_ALL:
        default:
          return true;
      }
    });
    return (
      <div>
        <AddTodo addTodo={ (task) => this.addTodo(task) }/>
        <TodoList todos={filteredToDos}
                  onTodoClick={ (id) => this.toggleTodo(id) } />
        {/* Footer */}
        <p>
          Show:
          {" "}
          <Link 
            filter={SHOW_ALL}
            active={this.state.filter === SHOW_ALL}
            onClick={ () => {
              this.setFilter(SHOW_ALL)
            }} >
            All
          </Link>
          {", "}
          <Link 
            filter={SHOW_ACTIVE}
            active={this.state.filter === SHOW_ACTIVE}
            onClick={ () => {
              this.setFilter(SHOW_ACTIVE)
            }} >
            Active
          </Link>
          {", "}
          <Link 
            filter={SHOW_COMPLETED}
            active={this.state.filter === SHOW_COMPLETED}
            onClick={ () => {
              this.setFilter(SHOW_COMPLETED)
            }} >
            Completed
          </Link>
        </p>
      </div>)
  }
}

export default App
