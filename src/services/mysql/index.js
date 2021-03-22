const mysql = require('mysql')

const db_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
}

let conn

handleDisconnect = () => {
    conn = mysql.createConnection(db_config);
    conn.connect((err) => {
        if (err) {
            console.error('Error in acquiring DB Connection :', err)
            setTimeout(handleDisconnect, 2000)
        }
    })
    conn.on('error', function(err) {
        console.error('db error', err)
        if(err.code === 'ECONNRESET') {
            handleDisconnect()
        } else {
            throw err
        }
    });
    return conn
}

const errorHandler = (error, msg, rejectFunction) => {
    if (error) {
        console.error(logDetails('ERROR', 'index.js', errorHandler, null, 34, error))
    }
    rejectFunction({ error: msg })
}

const logDetails = (consoleType, file, method, propriety, line, data) => {
    const options = {}
    const type = method ? 'method' : 'propriety'
    options.date = new Date()
    options.type = consoleType
    options.line = file
    options[type] = type === 'method' ? method : propriety
    options.line = line
    options.data = data
    return options
}

const _query = (query) => {
    return new Promise((resolve, reject) => {
        handleDisconnect().query(query, (error, results) => {
            if (error) {
                errorHandler(error, `Falha ao executar a query ${query}`, reject)
                return false
            }
            resolve(results)
        })
        conn.end()
    })
}

module.exports = {
    query: _query
}