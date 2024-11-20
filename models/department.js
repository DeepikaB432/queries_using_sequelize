// const { Sequelize } = require('sequelize');
const {sequelize,Sequelize} = require('../config');

const Department = sequelize.define('Department',{
    ID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    department_namel:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
module.exports = Department;