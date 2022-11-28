var express = require("express");
var router = express.Router();

var atualizarController = require("../controllers/atualizarController");

router.post("/cadastrar", function (req, res) {
    console.log("SALVEEEEEEE")
    atualizarController.cadastrar(req, res);
})

router.post("/elo", function (req, res) {
    console.log("ta indo pra ELO")
    atualizarController.elo(req, res);
})

module.exports = router;