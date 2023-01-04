const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const { post } = require('./dash-routes');

router.get('/', async (req, res) => {
    try {
        const post = await Post.findAll({
            include: [
                User
            ],
        });
        
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', {posts})
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn){
        res.redirect("/");
  } res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn){
        res.redirect('/');
    } res.render('signup')
});
