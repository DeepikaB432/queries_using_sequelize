const { sequelize } = require("./config");
const express = require('express');
const app = express();

const Department = require("./models/department");
const Employee = require("./models/employee");

Department.hasMany(Employee,{
    foreignKey:{
        name:"department_id",
        onDelete: 'CASCADE'
    }
});

Employee.belongsTo(Department,{
    foreignKey:{
        name: "department_id",
        onDelete: 'CASCADE'
    }
})

sequelize.sync({ force: false }).then((response)=>{
    console.log('Models have been synchronized successfully.');
}).catch((errors) =>{
    console.log('Error synchronizing models:',errors);
})

sequelize.authenticate().then(() => {
    console.log('Connected successfully');
}
).catch( (errors) => {
console.log(errors);
});

app.listen(3000,()=>{
    console.log('Server is listening')
})