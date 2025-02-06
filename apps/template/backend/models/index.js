const Sequalize = require('sequelize');
const dbConnection = require('../config/sequelize');

const db = {};
db.dbConnection = dbConnection;
db.Sequalize = Sequalize;

// Add models to db object here

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Databse Syncing
db.dbConnection.sync({ force: true }).then(async () => {
  // await clearDB();
  // createSampleData();
});

module.exports = db;
