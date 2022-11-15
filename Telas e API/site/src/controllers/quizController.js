var quizModel = require("../models/quizModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    quizModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var classeFinal = req.body.classeServer
    console.log(classeFinal)
    var fkId = req.body.idServer
    console.log(fkId)

    // Faça as validações dos valores
    if (classeFinal == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkId == undefined) {
        req.status(400).send("Seu id está com erro");
    } else {
    
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(classeFinal, fkId)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("TA INDOOO");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar
}