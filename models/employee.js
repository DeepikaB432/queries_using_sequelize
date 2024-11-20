// const { Sequelize } = require('sequelize');
const {sequelize,Sequelize} = require('../config');

const Employee = sequelize.define("Employee",{
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
    salary:{
        type: Sequelize.FLOAT,
        allowNull: true
    }
})

module.exports = Employee;
