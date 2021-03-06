const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');
// ADD withAuth to get requests

// GET all posts for dashboard
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
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

        // RENDER to dashboard.handlebars
        const posts = postData.map(post => post.get({  plain: true }))
        res.render('dashboard', {
            posts,
            loggedIn: true
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET a single post by id to edit
router.get('/edit/:id', (req, res) => {
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
        if (postData) {

        // RENDER to edit-post.handlebars
        const posts = postData.get({  plain: true })
        res.render('edit-post', {
            posts,
            loggedIn: true
        })
    } else {
        res.status(404).end()
    }
    })
    .catch((err) => {
        res.status(500).json(err)
    })
});

// GET create post page
router.get('/create', (req, res) => {

    // RENDER to create-post.handlebars
    res.render('create-post', {
        loggedIn: true
    })
});

module.exports = router;