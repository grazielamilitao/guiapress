const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const connection = new Sequelize('udemy','graziela','Vert1234=',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;