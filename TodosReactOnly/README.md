This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Project Structure](#project-structure)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Project Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
  src/
    components/
      AddTodo.js: Text input to add tasks to the list
      Link.js: <a> tag enclosing each filter
      Todo.js: List items
      TodoList.js: Unordered list
    containers/
      App.js: File that defines all logic and interactions.
    index.css
    index.js
  app.js: Simple express API server
  todos.json: Mock todos that follow the same protocol as the app
```

### Components vs Containers

This is a convention made by Dan Abramov, the creator of Redux. If you know the MVC pattern, containers have the models (data), and the controllers (interactions, data changes), and components are views.

This is not set in stone, but a rule that should make the project's organization a little bit easier.

For more info:
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.9poweyn5l)
* [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005#.mxk6rb35g)

### Component Lifecycle

Notice in `containers/App.js`:

```javascript
  ...
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
  ...
```

As soon as the component is mounted on the DOM, the App component makes a request to `/api/todos/` and requests the initial TODOs.
When the data is received,  we use [`setState`](https://facebook.github.io/react/docs/react-component.html#setstate) to update the app state!
**Important: never mutate state directly!**

This is one of the many lifecycle methods that components have: [The Component Lifecycle](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle).

## A step further

Try making a modification to the project, such as:

* Saving the new todos list in your server.
* Deleting or editing existing todos.
