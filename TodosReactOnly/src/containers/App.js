import React from 'react'
import Footer from '../components/Footer'
import Link from '../components/Link'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

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

    // Assigns "this" value to methods that are not React.Component default methods.
    // Otherwise, you can't call Component methods from inside th
    const classMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    classMethods.forEach((method) => {
      if (typeof this[method] === "function") {
        this[method] = this[method].bind(this)
      }
    });
  }

  
  render () {
    return (
      <div>
        <AddTodo addTodo={ () => {} }/>
        <TodoList todos={this.state.todos} ,
                  onTodoClick={ () => {} } />
        {/* Footer */}
        <p>
          Show:
          {" "}
          <Link 
            filter=SHOW_ALL
            active={this.state.filter === SHOW_ALL}
            onClick={ () => {
              this.setFilter(SHOW_ALL)
            }} >
            All
          </Link>
          {", "}
          <Link 
            filter=SHOW_ACTIVE
            active={this.state.filter === SHOW_ACTIVE}
            onClick={ () => {
              this.setFilter(SHOW_ACTIVE)
            }} >
            Active
          </Link>
          {", "}
          <Link 
            filter=SHOW_COMPLETED
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
