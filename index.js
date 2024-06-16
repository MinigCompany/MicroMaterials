const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const materialRoutes = require('./routes/MaterialsRoute');
const CategoryRouter = require('./routes/CategoriesRoute')
const UNDMRouter = require('./routes/UDMRoute')

const corsOptions = {
  origin: '*', // Reemplaza con tu dominio permitido
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/ApiMinig/Materiales', materialRoutes);
app.use('/ApiMinig/Categorias', CategoryRouter);
app.use('/ApiMinig/UnidadesDM', UNDMRouter);

const port = 3000; // Cambia esto al puerto que desees utilizar
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});