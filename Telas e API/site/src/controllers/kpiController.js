var kpiModel = require("../models/kpiModel");

function count(req, res) {
    kpiModel.count().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os kpi: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function media(req, res) {
    kpiModel.media().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os kpi: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function player(req, res) {
    kpiModel.player().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os kpi: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function classe(req, res) {
    kpiModel.classe().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os kpi: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    count,
    media,
    player,
    classe,
}