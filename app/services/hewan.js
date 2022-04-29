const { hewan } = require("../models");

module.exports = {
    getAllHewan() {
        const datahewan = hewan.findAll()
        return datahewan
    },
    createHewan(nama_hewan, jenis, umur) {
        return hewan.create({
            nama_hewan,
            jenis,
            umur
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