var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/count", function (req, res) {
    kpiController.count(req, res);
});

router.get("/media", function (req, res) {
    kpiController.media(req, res);
});

router.get("/player", function (req, res) {
    kpiController.player(req, res);
});

router.get("/classe", function (req, res) {
    kpiController.classe(req, res);
});

router.get("/elosRank", function (req, res) {
    kpiController.elosRank(req, res);
});

module.exports = router;