const mysql = require('./mysql')
const task_status = require('../helpers/constants')

const _save = async (nome_usuario, email_usuario, descricao, status) => {
    try {
        return await mysql.query(`INSERT INTO tarefas (nome_usuario, email_usuario, descricao, status) VALUES ('${nome_usuario}', '${email_usuario}', '${descricao}', '${status}')`)
    } catch (e) {
        return `Falha ao inserir tarefa: ${e}`
    }
}

const _update = async (id, nome_usuario, email_usuario, descricao, status) => {
    try {
        return await mysql.query(`UPDATE tarefas SET nome_usuario = ${nome_usuario}, email_usuario = ${email_usuario}, descricao ='${descricao}', status ='${status}' WHERE id = ${id}`)
    } catch (e) {
        return `Falha ao atualizar tarefa: ${e}`
    }
}

const _delete = async (id) => {
    try {
        return await mysql.query(`DELETE FROM tarefas WHERE id = ${id}`)
    } catch (e) {
        return `Falha ao deletar tarefa: ${e}`
    }
}

const _changeStatus = async (status, id, qtd_pendente) => {
    try {
        if (status === task_status.TAKS_STATUS.CONCLUIDO) {
            return await mysql.query(`UPDATE tarefas SET status = '${task_status.TAKS_STATUS.CONCLUIDO}' WHERE id = ${id}`)
        } else {
            return await mysql.query(`UPDATE tarefas SET status = '${task_status.TAKS_STATUS.PENDENTE}', qtd_pendente = ${++qtd_pendente} WHERE id = ${id}`)
        }
    } catch (e) {
        return `Falha ao atualizar tarefa: ${e}`
    }

}

const _getTasksByStatus = async (status) => {
    try {
        return await mysql.query(`SELECT * FROM tarefas WHERE status = '${status}'`)
    } catch (e) {
        return `Falha ao buscar tarefa por status: ${e}`
    }
}

const _getTasks = async () => {
    try {
        return await mysql.query(`SELECT * FROM tarefas`)
    } catch (e) {
        return `Falha ao buscar tarefas: ${e}`
    }
}

const _getTaskById = async (id) => {
    try {
        return await mysql.query(`SELECT * FROM tarefas WHERE id = ${id}`)
    } catch (e) {
        return `Falha ao buscar tarefas: ${e}`
    }
}

module.exports = {
    save: _save,
    update: _update,
    delete: _delete,
    changeStatus: _changeStatus,
    getTasksByStatus: _getTasksByStatus,
    getTasks: _getTasks,
    getTaskById: _getTaskById
}