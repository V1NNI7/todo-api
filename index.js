const express = require('express'); // Framework
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // interpretação do json
const { Tarefa } = require('./models');
const tarefa = require('./models/tarefa');
const { OPEN_READWRITE } = require('sqlite3');


app.use(bodyParser.json());

app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
});

app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(tarefa);
});

app.post('/tarefas', async (req, res) => {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
});

app.delete('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(tarefa);
});

app.put('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(tarefa);
});

app.listen(port);