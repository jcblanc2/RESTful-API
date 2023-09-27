const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    try {
        
    } catch (error) {
        
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


module.exports = router;