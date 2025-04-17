const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public')); 

// Rota para a página inicial (front-end)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api', (req, res) => {
  res.json({ message: 'Olá github Actions! Funcionei !' });
});

app.listen(port, () => {
  console.log(`App rodando http://localhost:${port}`);
});

module.exports = app;
