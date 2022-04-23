const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(commentData => res.json(commentData))
        .catch((err) => {
            res.status(500).json(err);
        })
  });

// POST new comment
router.post('/', (req, res) => {
    console.log(req.body)
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        // user_id: req.session.user_id,
        post_id: req.body.post_id
    })
    .then(commentData => res.json(commentData))
    .catch((err) => {
        res.status(500).json(err);
        console.log(err)
    })
});

// DELETE comment by id
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
        }
        res.json(commentData);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;