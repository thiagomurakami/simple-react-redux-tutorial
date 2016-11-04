# Todos Redux

[Original source code](https://github.com/reactjs/redux/tree/master/examples/todos)

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Project Structure

```
TodosRedux/
  README.md
  node_modules/
  package.json
  public/
    index.html
  src/
    actions/
    	index.js: Description of actions
    	index.spec.js: Tests
	components/
		App.js: Simply gets all containers and mounts them.
		Footer.js: Renders the footer and the filter options.
		Link.js: Each filter option.
		Todo.js: Each todo.
		TodoList.js: Renders todo list.
	containers/
		AddTodo.js:  Renders the form to add a todo.
		FilterLink.js: Connects the Link component to the data/actions it needs.
		VisibleTodoList.js: Same as FilterLink but with TodoList
	reducers/
		index.js: The entrypoint to the reducers, combines the different reducers into one.
		todos.js: Reducer for todos interactions
		todos.spec.js
		visibilityFilter.js: Reducer for filters
    index.css
    index.js: Creates a data source (store) from reducers and gives it to the App with Provider
  app.js: Simple express API server
  todos.json: Mock todos that follow the same protocol as the app
```

## Redux? Actions? Stores? Reducers?

If you are really interested, read the [Redux documentation](http://redux.js.org/), it's really good and probably does a better job at explaining Redux than this simple README.

### Redux

All the STATE is inside a single store, and dispatching an action is the only way to modify it. The modification is done using reducers! Yeah, that's basically it!

### Glossary

Read Redux's [Glossary](http://redux.js.org/docs/Glossary.html) to understand each term.

### Using Redux with React

Surprisingly, Redux is a library that could be used without React, to make it work with it, you need to [`connect`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) your components to the Redux Store.

## A step further

Try adding a new functionality. If you're feeling adventurous, try fetching the initial state from the server! [Async Actions from Redux docs](http://redux.js.org/docs/advanced/AsyncActions.html)
