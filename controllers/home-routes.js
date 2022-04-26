const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// GET all posts for homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {

        // RENDER to homepage.handlebars
        const posts = postData.map(post => post.get({  plain: true }))
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET a single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post found wth this id' })
            return;
        }

        // RENDER to single-post.handlebars
        const posts = postData.get({  plain: true })
        res.render('single-post', {
            posts,
            loggedIn: req.session.loggedIn
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    // RENDER to login.handlebars
    res.render('login')
});

// GET signup
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/login')
        return;
    }
    // RENDER to signup.handlebars
    res.render('signup')
});

module.exports = router;