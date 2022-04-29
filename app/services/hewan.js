const { hewan } = require("../models");

module.exports = {
    getAllHewan(data) {
        const datahewan = hewan.findAll(data)
        return datahewan
    },
    createHewan(nama_hewan, jenis, umur, id_penitipan) {
        return hewan.create({
            nama_hewan,
            jenis,
            umur,
            id_penitipan
        })
    },
    updateHewan(hewan, req) {
        return hewan.update(req)
    },
    findHewan(id) {
        return hewan.findByPk(id)
    },
    deleteHewan(hewan, req) {
        return hewan.destroy(req)
    }
}