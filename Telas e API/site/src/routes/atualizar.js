var express = require("express");
var router = express.Router();

var atualizarController = require("../controllers/atualizarController");

router.get("/", function (req, res) {
    atualizarController.testar(req, res);
});

router.get("/listar", function (req, res) {
    atualizarController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de atualizarController.js
router.post("/cadastrar", function (req, res) {
    console.log("SALVEEEEEEE")
    atualizarController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    atualizarController.entrar(req, res);
});

module.exports = router;