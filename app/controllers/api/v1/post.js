/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const { Post } = require("../../../models");
const postService = require("../../../services/post")

module.exports = {
  list(req, res) {
    postService.getAllPosts()
      .then((posts) => {
        res.status(200).json({
          status: "OK",
          data: {
            posts,
          },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  create(req, res) {
    const { title, body } = req.body;
    postService.createPost(title, body)
      .then((post) => {
        res.status(201).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(201).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    const post = req.post;
    postService.updatePost(post, req.body)
      .then(() => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  show(req, res) {
    const post = req.post;

    res.status(200).json({
      status: "OK",
      data: post,
    });
  },

  destroy(req, res) {
    const post = req.post;
    postService.deletePost(post, req.body)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  setPost(req, res, next) {
    postService.findPost(req.params.id)
      .then((post) => {
        if (!post) {
          res.status(404).json({
            status: "FAIL",
            message: "Post not found!",
          });

          return;
        }

        req.post = post;
        next()
      })
      .catch((err) => {
        res.status(404).json({
          status: "FAIL",
          message: "Post not found!",
        });
      });
  },
};
