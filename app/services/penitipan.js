const { penitipan } = require("../models");

module.exports = {
    getAllPenitipan() {
        const datapenitipan = penitipan.findAll()
        return datapenitipan
    },
    createPenitipan(jenis_penitipan, durasi, biaya) {
        return penitipan.create({
            jenis_penitipan,
            durasi,
            biaya
        })
    },
    updatePenitipan(data, req) {
        return data.update(req)
    },
    findPenitipan(id) {
        return penitipan.findByPk(id)
    },
    deletePenitipan(data, req) {
        return data.destroy(req)
    }
}