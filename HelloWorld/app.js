var express = require('express');
var app = express();

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
})
