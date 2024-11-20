const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('fsbootcamp2024_module_assesment','root','980333',{
    host:'localhost',
    dialect:'mysql'
})

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;