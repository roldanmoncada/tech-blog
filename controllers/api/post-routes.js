const router = require("express").Router();
const withAuth = require('../../utils/auth')

const { Post } = require('../../models');

router.post('/', withAuth, async (req,res) => {
    const body = req.body;

    try {
        const newPost = await Post.create({
            ...body,
            userId: req.session.userId
        })
        res.json(newPost);
    } catch (error) {
        res.status(500).json(error)
    }
});

router.put('/:id', withAuth, async (req,res) => {
    try {
        const [updatedPost] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        if (updatedPost > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

router.delete('/:id', withAuth, (req,res) => {
    try {
        const [deletedPost] = Post.destroy({
            where: {
                id: req.params.id,
            }
        })
        if (deletedPost > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;