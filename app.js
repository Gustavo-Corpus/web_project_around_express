const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/aroundb')
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '680d5bdedd0eae00d7397ef5',
  };
  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.use((err, req, res) => {
  res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
