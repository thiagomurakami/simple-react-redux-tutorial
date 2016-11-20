var express = require('express')
var fs = require('fs')

var app = express()

app.get('/api/todos', (req, res) => {
	fs.readFile('./todos.json', 'utf8', (err, data) => {
		if (!err) res.json(JSON.parse(data))
		else res.json({todos: []})
	})
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
