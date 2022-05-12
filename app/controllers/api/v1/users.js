/**
 * @file contains request handler of hewan resource
 * @author Fikri Rahmat Nurhidayat
 */

const usersService = require("../../../services/users")
const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res) {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        usersService.create({
            username,
            email: email.toLowerCase(),
            password: hashedPassword,
        })
            .then((createdUser) => {
                res.status(201).json({
                    status: "Success",
                    message: "Registration success!",
                    data: {
                        id: createdUser.id,
                        username,
                        email: createdUser.email
                    }
                });
            }).catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },

    async getUser(req, res) {
        const user = await usersService.get(req.params.id)
        if (!user) {
            res.status(404).json({
                status: "FAIL",
                message: `User not found!`,
            });
            return;
        }

        usersService.get(req.params.id)
            .then(() => {
                res.status(200).json({
                    status: "success",
                    data: user
                })
            }).catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message
                })
            })
    },

    async getAll(req, res) {
        usersService.list()
            .then((allUsers) => {
                res.status(200).json({
                    status: "success",
                    data: {
                        allUsers
                    }
                })
            }).catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message
                })
            })
    },

    async update(req, res) {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await usersService.get(req.params.id)
        if (!user) {
            res.status(404).json({
                status: "FAIL",
                message: `User not found!`,
            });
            return;
        }

        if (username.length <= 10) {
            res.status(400).json({
                status: 'failed',
                message: 'username must have 10 or less characters!'
            })
            return;
        }

        if (password.length <= 10) {
            res.status(400).json({
                status: 'failed',
                message: 'Password must have 10 or less characters!'
            })
            return;
        }

        const name = await usersService.getOne({
            where: {
                username
            }
        })

        if (name) {
            res.status(404).json({
                status: "FAIL",
                message: "username already taken!",
            });
            return;
        }

        usersService.update(req.params.id, {
            username,
            password: hashedPassword
        }).then(() => {
            res.status(200).json({
                status: "OK",
                message: `User with id ${req.params.id} has been updated.`,
            });
        }).catch((err) => {
            res.status(422).json({
                status: "FAIL",
                message: err.message,
            });
        });
    },

    async delete(req, res) {

        const user = await usersService.get(req.params.id)
        if (!user) {
            res.status(404).json({
                status: "FAIL",
                message: `User not found!`,
            });
            return;
        }

        usersService.delete(req.params.id)
            .then(() => {
                res.status(200).json({
                    status: "OK",
                    message: `User has been deleted.`
                })
            }).catch((err) => {
                res.status(422).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },
};
