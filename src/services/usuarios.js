const mysql = require('./mysql')

const _save = async (nome, email) => {
    try {
        return await mysql.query(`INSERT INTO usuarios (nome, email) VALUES ('${nome}', '${email}')`)
    } catch (e) {
        return `Falha ao inserir usuario: ${e}`
    }
}

const _update = async (id, nome, email) => {
    try {
        return await mysql.query(`UPDATE usuarios SET nome = '${nome}', email = '${email}' WHERE id = ${id}`)
    } catch (e) {
        return `Falha ao atualizar usuario: ${e}`
    }
}

const _delete = async (id) => {
    try {
        return await mysql.query(`DELETE FROM usuarios WHERE id = ${id}`)
    } catch (e) {
        return `Falha ao deletetar usuario: ${e}`
    }
}

const _getUsers = async () => {
    try {
        return await mysql.query(`SELECT * FROM usuarios`)
    } catch (e) {
        return `Falha ao buscar usuarios: ${e}`
    }
}

const _getUserById = async (id) => {
    try {
        return await mysql.query(`SELECT * FROM usuarios WHERE id = ${id}`)
    } catch (e) {
        return `Falha ao buscar usuario: ${e}`
    }
}

module.exports = {
    save: _save,
    update: _update,
    delete: _delete,
    getUsers: _getUsers,
    getUserById: _getUserById
}