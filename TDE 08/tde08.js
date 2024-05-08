const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota para obter todas as tarefas
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// Rota para criar uma nova tarefa
app.post('/tasks', async (req, res) => {
  const { name, description } = req.body;
  const newTask = await prisma.task.create({
    data: {
      name,
      description,
    },
  });
  res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa existente
app.put('/tasks/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { name, description, isDone } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        name,
        description,
        isDone,
      },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
});

// Rota para excluir uma tarefa existente
app.delete('/tasks/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
