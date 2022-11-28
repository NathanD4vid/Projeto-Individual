var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/count", function (req, res) {
    kpiController.listar(req, res);
});

router.get("/media", function (req, res) {
    kpiController.listar(req, res);
});

router.get("/player", function (req, res) {
    kpiController.listar(req, res);
});

router.get("/classe", function (req, res) {
    kpiController.listar(req, res);
});

module.exports = router;