var atualizarModel = require("../models/atualizarModel");

var sessoes = [];

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkId = req.body.idServer2
    console.log(fkId)

    // Faça as validações dos valores
    if (fkId == undefined) {
        req.status(400).send("Seu id está com erro");
    } else {
    
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        atualizarModel.cadastrar(fkId)
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

function elo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var eloFinal = req.body.eloServer
    var fkId3 = req.body.idServer3
    console.log(eloFinal)

    // Faça as validações dos valores
    if (eloFinal == undefined || fkId3 == undefined) {
        req.status(400).send("Seu id está com erro");
    } else {
    
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        atualizarModel.elo(eloFinal, fkId3)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("tamo na ELO");
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
    elo
}