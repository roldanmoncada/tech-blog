const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                User
            ],
        });
        
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {posts})
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/post/:id', async (req,res) => {
    try {
        const singlePost = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                }
            ],
        })
        if (singlePost) {
            const post = singlePost.get({ plain: true })
            res.render('single-post', { post })
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(500).end();
    }
})

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
