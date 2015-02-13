
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var classes = require('./routes/classes');
var course_ID = require('./routes/course_ID');
var done = require('./routes/done');
var login = require('./routes/login');
var make_account = require('./routes/make_account');
var notes = require('./routes/notes');
var professor = require('./routes/professor');
var udder_quarters = require('./routes/udder_quarters');
var upload = require('./routes/upload');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/classes', classes.view);
app.get('/course_ID', course_ID.view);
app.get('/done', done.view);
app.get('/login', login.view);
app.get('/make_account', make_account.view);
app.get('/notes', notes.view);
app.get('/professor', professor.view);
app.get('/udder_quarters', udder_quarters.view);
app.get('/upload', upload.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
