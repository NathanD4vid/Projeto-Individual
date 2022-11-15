var express = require("express");
var router = express.Router();

var desafioController = require("../controllers/desafioController");

router.get("/", function (req, res) {
    desafioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    desafioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrar", function (req, res) {
    console.log("SALVEEEEEEE")
    desafioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    desafioController.entrar(req, res);
});

module.exports = router;