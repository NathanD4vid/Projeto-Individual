var desafioModel = require("../models/desafioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA desafioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    desafioModel.listar()
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
    var acertosFinal = req.body.acertosServer
    var fkId = req.body.idServer

    // Faça as validações dos valores
    if (acertosFinal == undefined) {
        res.status(400).send("Seus acertos estão estão undefined!");
    } else if (fkId == undefined) {
        req.status(400).send("Seu id está com erro");
    } else {
    
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        desafioModel.cadastrar(acertosFinal, fkId)
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