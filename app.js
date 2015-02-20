
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


var index = require('./routes/index');
var classes = require('./routes/classes');
var done = require('./routes/done');
var login = require('./routes/login');
var make_account = require('./routes/make_account');
var notes = require('./routes/notes');
var upload = require('./routes/upload');
var account = require('./routes/accounts');
var add_class = require('./routes/add_class');
var welcome = require('./routes/welcome');
var done_class = require('./routes/done_addclass');
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
app.get('/done', done.view);
app.get('/login', login.view);
app.get('/make_account', make_account.view);
app.get('/:display/notes', notes.view);
app.get('/upload', upload.view);
app.get('/account_done', account.addAccount);
app.get('/add_class', add_class.view);
app.get('/welcome', welcome.view);
app.get('/done_addclass', add_class.addClass);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});