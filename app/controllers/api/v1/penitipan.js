/**
 * @file contains request handler of hewan resource
 * @author Fikri Rahmat Nurhidayat
 */

const { hewan } = require("../../../models");
const penitipanHewan = require("../../../services/penitipan")

module.exports = {
    list(req, res) {
        penitipanHewan.getAllPenitipan({
            include: {
                model: hewan,
                attributes: ["nama_hewan", "jenis", "umur"]
            }
        })
            .then((datapenitipan) => {
                res.status(200).json({
                    status: "OK",
                    data: {
                        datapenitipan,
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
        const { jenis_penitipan, durasi, biaya } = req.body;
        penitipanHewan.createPenitipan(jenis_penitipan, durasi, biaya)
            .then((datapenitipan) => {
                res.status(201).json({
                    status: "OK",
                    data: datapenitipan,
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
        const datapenitipan = req.penitipan;
        penitipanHewan.updatePenitipan(datapenitipan, req.body)
            .then(() => {
                res.status(200).json({
                    status: "OK",
                    data: datapenitipan,
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
        const datapenitipan = req.penitipan;

        res.status(200).json({
            status: "OK",
            data: datapenitipan,
        });
    },

    destroy(req, res) {
        const datapenitipan = req.penitipan;
        penitipanHewan.deletePenitipan(datapenitipan, req.body)
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

    setPenitipan(req, res, next) {
        penitipanHewan.findPenitipan(req.params.id)
            .then((penitipan) => {
                if (!penitipan) {
                    res.status(404).json({
                        status: "FAIL",
                        message: "penitipan not found!",
                    });

                    return;
                }

                req.penitipan = penitipan;
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
