const express = require('express');
const router = express.Router();
const LocalizacaoService = require('../services/localizacao.service');
const Localizacao = require('../model/localizacao.model');

router.post('/', (req, res, next) => {
    let localizacao = new Localizacao(req.body);

    LocalizacaoService
        .salvar(localizacao)
        .then((doc) => {
            res.status(201).json(doc);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.get('/', (req, res, next) => {
    LocalizacaoService
        .consultar()
        .then((docs) => {
            res.status(200).json(docs);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.put('/', (req, res, next) => {
    let localizacao = new Localizacao(req.body);

    LocalizacaoService
        .atualizar(localizacao)
        .then((doc) => {
            res.status(200).json(doc);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res, next) => {

    LocalizacaoService
        .excluir(req.params.id)
        .then((doc) => {
            res.status(200).json(doc);
        }, (err) => {
            res.status(500).json(err);
        });
});

module.exports = router;