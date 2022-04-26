const { Post } = require("../models");

module.exports = {
    getAllPosts() {
        const posts = Post.findAll()
        return posts
    },
    createPosts(title, body) {
        return Post.create({
            title,
            body,
        });
    },
    updatePosts(post, req) {
        return post.update(req);
    },
    findPost(id) {
        return Post.findByPk(id)
    }
}