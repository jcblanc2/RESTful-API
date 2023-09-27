const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    res.send("We are on post!");
});


router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
});


module.exports = router;