const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.send(allPosts);
    } catch (error) {
        res.send({ message: "Error!" });
    }
});


router.get('/:postId', async (req, res) => {
    try {
        const allPosts = await Post.findById(req.params.postId);
        res.send(allPosts);
    } catch (error) {
        res.send({ message: "Error!" });
    }
});


router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const postSaved = await post.save();
        res.status(202).json(postSaved);
    } catch (error) {
        res.send({ message: "Error!" });
    }
});


router.delete('/:postId', async (req, res) => {
    try {
        const postRemoved = await Post.findByIdAndDelete(req.params.postId);
        res.json(postRemoved);
    } catch (error) {
        res.send({ message: "Error!" });
    }
});



router.patch('/:postId', async (req, res) => {
    try {
        const postRemoved = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(postRemoved);
    } catch (error) {
        res.send({ message: "Error!" });
    }
});


module.exports = router;