const express = require('express');
const router = express.Router();

const usuarios = require('../services/usuarios')

router.post('/save', async (req, res) => {
    let {nome, email} = req.body
    if (nome && email) {
        return res.status(200).send(await usuarios.save(nome, email))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.put('/update', async (req, res) => {
    let {id, nome, email} = req.body
    if (id && nome && email) {
        return res.status(200).send(await usuarios.update(id, nome, email))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.delete('/delete', async (req, res) => {
    let {id} = req.query
    if (id) {
        return res.status(200).send(await usuarios.delete(id))
    } else {
        return res.status(400).send('Nenhum parametro enviado.');
    }
})

router.get('/getUsers', async (req, res) => {
    return res.status(200).send(await usuarios.getUsers())
})

router.get('/getUserById', async (req, res) => {
    const { id } = req.query
    if (id) {
        return res.status(200).send(await usuarios.getUserById(id))
    } else {
        return res.status(400).send('Nenhum parametro enviado.')
    }
})

module.exports = app => app.use('/usuarios', router);