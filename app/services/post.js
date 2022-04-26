const { Post } = require("../models");

module.exports = {
    getAllPosts() {
        const posts = Post.findAll()
        return posts
    },
}