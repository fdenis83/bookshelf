var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Books',
    Text: 'Books'
        }, {
    Link: '/Author',
    Text: 'Authors'
        }];
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');

//var handlebars = require('express-handlebars')
//app.engine('.hbs', handlebars({
//extname: '.hbs'
//}));

app.set('view engine', '.ejs');


app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Storystrap',
        nav: nav
    });
});

app.get('/Books', function (req, res) {
    res.send('Hello Books');
});
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});