require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const listEndpoints = require('express-list-endpoints');
const cors = require('cors')

const app = express();

(async () => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())

    await require('./controllers/usuarios.controller')(app);
    await require('./controllers/tarefas.controller')(app);


    app.listen(3000, () => {
        console.log(chalk.greenBright(`#####################################################################\n`));
        console.log(chalk.cyan('\\{^_^}/ TO DO LIST - SAIPOS! \n'));
        // LIST ROUTES
        console.log(chalk.yellow.bold(`\nRoutes `));
        listEndpoints(app).forEach((value => {
            console.log(`${value.path} - ${value.methods} `);
        }));
        console.log(`\n`);
    });

})();
