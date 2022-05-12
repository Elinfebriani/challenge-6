const { users } = require("../models");

module.exports = {
    create(inputArgs) {
        return users.create(inputArgs);
    },

    update(id, updatedArgs) {
        return users.update(updatedArgs, {
            where: {
                id,
            },
        });
    },

    delete(id) {
        return users.destroy({
            where: {
                id
            }
        });
    },

    findUserById(id) {
        return users.findByPk(id);
    },

    findAll() {
        return users.findAll();
    },
};
