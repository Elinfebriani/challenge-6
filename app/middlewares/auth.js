const jwt = require('jsonwebtoken');
const usersService = require("../services/users")

module.exports = {
    async authorize(req, res, next) {
        try {
            const token = req.headers.authorization;
            const payload = jwt.verify(token, 'rahasiaNegara');
            req.user = await usersService.get(payload.id);
            next();
        } catch (err) {
            res.status(401).json({
                error: err.message,
                message: "Unauthorized. You must login first to perform this action!"
            });
        }
    }
}
