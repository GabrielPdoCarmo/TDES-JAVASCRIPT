const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [];

// Rota para obter todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para criar uma nova tarefa
app.post('/tasks', (req, res) => {
  const { name, description } = req.body;
  const newTask = {
    id: tasks.length + 1,
    name,
    description,
    isDone: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa existente
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { name, description, isDone } = req.body;
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      id: taskId,
      name: name || tasks[taskIndex].name,
      description: description || tasks[taskIndex].description,
      isDone: isDone !== undefined ? isDone : tasks[taskIndex].isDone
    };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
});

// Rota para excluir uma tarefa existente
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
