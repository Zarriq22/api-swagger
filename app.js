const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Konfigurasi Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Simple Express API with Swagger',
    },
  },
  apis: ['./routes/*.js'], // Lokasi file rute API
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Impor rute
const exampleRoute = require('./routes/example');
const registerRoute = require('./routes/register'); // Rute baru untuk registrasi

app.use('/api', exampleRoute);
app.use('/api', registerRoute); // Gunakan rute baru

// Rute dasar
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api-docs`);
});
