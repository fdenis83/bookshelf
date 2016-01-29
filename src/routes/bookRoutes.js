var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
    var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolay',
            read: false
    },
        {
            title: 'Duck Tales',
            genre: 'Science Fiction',
            author: 'Cartoon Network',
            read: false
    },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
    },
        {
            title: 'The Time Machine',
            genre: 'Science Fiction',
            author: 'H.G. Wells',
            read: false
    },
        {
            title: 'A Journey into the Center of the Earth',
            genre: 'Historical Fiction',
            author: 'Jules Verne',
            read: false
    }
];
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Books',
                nav: nav,
                books: books
            });
        });
    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Book',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
}
module.exports = router;