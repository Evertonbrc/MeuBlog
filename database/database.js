const sequelize = require("sequelize");

const connection = new sequelize('guiapress', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;