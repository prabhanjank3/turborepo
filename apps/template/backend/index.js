require('dotenv').config();
const express = require('express');
const db = require('./models');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

// Sync database and start server
db.dbConnection
  .sync()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
