const express = require('express');
const router = express.Router();

const tarefas = require('../services/tarefas')

router.post('/save', async (req, res) => {
    const { nome_usuario, email_usuario, descricao, status } = req.body
    if (nome_usuario && email_usuario && descricao && status) {
        return res.status(200).send(await tarefas.save(nome_usuario, email_usuario, descricao, status))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.put('/update', async (req, res) => {
    const { id, nome_usuario, email_usuario, descricao, status } = req.body
    if (id && nome_usuario && email_usuario && descricao && status) {
        return res.status(200).send(await tarefas.update(id, nome_usuario, email_usuario, descricao, status))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.delete('/delete', async (req, res) => {
    const { id } = req.query
    if (id) {
        return res.status(200).send(await tarefas.delete(id))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.post('/changeStatus', async (req, res) => {
    const { status, id, qtd_pendente } = req.body
    if (status && id) {
        return res.status(200).send(await tarefas.changeStatus(status, id, qtd_pendente))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.get('/getTaskById', async (req, res) => {
    const { id } = req.query
    if (id) {
        return res.status(200).send(await tarefas.getTaskById(id))
    } else {
        return res.status(400).send('Nenhum parametro enviado.')
    }
})

router.get('/getTasksByStatus', async (req, res) => {
    const { status } = req.query
    if (status) {
        return res.status(200).send(await tarefas.getTasksByStatus(status))
    } else {
        return res.status(400).send('Nenhum parametro enviado.')
    }
})

router.get('/getTasks', async (req, res) => {
    return res.status(200).send(await tarefas.getTasks())
})

module.exports = app => app.use('/tarefas', router);