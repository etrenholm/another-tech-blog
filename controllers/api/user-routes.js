const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { 
            exclude: ['password'] 
        }
    })
    .then((userData) => {
        res.json(userData)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// GET user by id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { 
            exclude: ['password'] 
        },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
    .then(userData => {
        if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
        }
        res.json(userData);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

// POST new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
    
        res.json(userData);
        });
      })
      .catch((err) => {
        res.status(500).json(err);
    })
  });

// POST login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
  
      const validPassword = userData.checkPassword(req.body.password);
  
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
  
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
    
        res.json({ user: userData, message: 'You are now logged in!' });
        });
    });
});

// POST logout
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

// UPDATE user by id
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
        id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(userData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// DELETE user by id
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
        .then(userData => {
            if (!userData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
            }
            res.json(userData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
  });

module.exports = router;