const { car } = require("../models");

module.exports = {
    create(createArgs) {
        return car.create(createArgs);
    },

    update(id, updateArgs) {
        return car.update(updateArgs, {
            where: {
                id,
            },
        });
    },

    delete(id) {
        return car.destroy({
            where: {
                id
            }
        });
    },

    findCarById(id) {
        return car.findByPk(id);
    },

    findAll() {
        return car.findAll();
    },

};