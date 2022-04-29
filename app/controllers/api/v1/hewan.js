/**
* @file contains request handler of hewan resource
* @author Fikri Rahmat Nurhidayat
*/

const { penitipan } = require("../../../models");
const hewanService = require("../../../services/hewan")

module.exports = {
    list(req, res) {
        hewanService.getAllHewan({
            include: {
                model: penitipan
            }
        })
            .then((datahewan) => {
                res.status(200).json({
                    status: "OK",
                    data: {
                        datahewan,
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
        const { nama_hewan, jenis, umur } = req.body;
        hewanService.createHewan(nama_hewan, jenis, umur)
            .then((datahewan) => {
                res.status(201).json({
                    status: "OK",
                    data: datahewan,
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
        const datahewan = req.hewan;
        hewanService.updateHewan(datahewan, req.body)
            .then(() => {
                res.status(200).json({
                    status: "OK",
                    data: datahewan,
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
        const hewan = req.hewan;

        res.status(200).json({
            status: "OK",
            data: hewan,
        });
    },

    destroy(req, res) {
        const hewan = req.hewan;
        hewanService.deleteHewan(hewan, req.body)
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

    setHewan(req, res, next) {
        hewanService.findHewan(req.params.id)
            .then((hewan) => {
                if (!hewan) {
                    res.status(404).json({
                        status: "FAIL",
                        message: "hewan not found!",
                    });

                    return;
                }

                req.hewan = hewan;
                next()
            })
            .catch((err) => {
                res.status(404).json({
                    status: "FAIL",
                    message: "hewan not found!",
                });
            });
    },
};
