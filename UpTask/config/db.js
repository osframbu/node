const { Sequelize } = require('sequelize');

define:{
    timestamps:false
}
const db  = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'mysql', 
  port:3306
});

module.exports = db;