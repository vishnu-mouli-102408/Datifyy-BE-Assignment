// sequelize.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  storage: ":memory:",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
