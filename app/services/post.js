const { Post } = require("../models");

module.exports = {
    getAllPosts() {
        const posts = Post.findAll()
        return posts
    },
    createPost(title, body) {
        return Post.create({
            title,
            body,
        })
    },
    updatePost(post, req) {
        return post.update(req)
    },
    findPost(id) {
        return Post.findByPk(id)
    },
    deletePost(post, req) {
        return post.destroy(req)
    }
}