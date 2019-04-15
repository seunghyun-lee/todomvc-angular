var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(3000, function () {
    console.log('server started and listening on port 3000');
});

// 앵귤러 서비스쪽에 있던 배열을 노드 코드로 옮겼다.
var todos = [{
    id: 1,
    title: 'todo 1',
    completed: false
  }, {
    id: 2,
    title: 'todo 2',
    completed: false
  }, {
    id: 3,
    title: 'todo 3',
    completed: true
  }];

// GET /api/todos 라우팅 설정
app.get('/api/todos', function (req, res) {
    res.json(todos);
});

app.post('/api/todos', function (req,res) {    
    if (!req.body.title) {
        return res.status(400).send();
    }

    var newId = !todos.length ? 
        1 : todos[todos.length - 1].id + 1;

    var newTodo = {
        id: newId,
        title: req.body.title,
        completed: false
    };

    todos.push(newTodo);
    res.json(newTodo);
});
