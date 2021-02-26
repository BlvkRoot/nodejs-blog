const express = require('express');
const Post = require('../models/posts');

const router = express.Router();

// show all posts
router.get("/", (req, res) => {
    res.send({message: "Posts"});
});

// Get post by id
router.get("/:id", async (req, res) => {
    res.send({message: "Get Post"});
});

// Create posts
router.post("/create", async (req, res) => {
    const {title} = req.body;

    try {
        if(await Post.findOne({title}))
            res.send({error: 'Post already exists'})

        const post = await Post.create(req.body);

        res.send({post});

    } catch (error) {
        res.status(400).send({error})
    }
});

// Update posts
router.put("/:id", async (req, res) => {
    res.send({message: "Update Posts"});
});

// Delete posts
router.delete("/:id", async (req, res) => {
    res.send({message: "Delete Posts"});
});

module.exports = app => app.use('/posts', router);