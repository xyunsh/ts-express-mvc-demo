import { Sequelize } from 'sequelize-typescript';

const employees : Sequelize = new Sequelize({
    name: 'employees',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    modelPaths: [
        __dirname + '/employees',
    ]
});


const sakila : Sequelize = new Sequelize({
   name: 'sakila',
   dialect: 'mysql',
   host: 'localhost',
   username: 'root',
   password: '',
   modelPaths: [
       __dirname + '/sakila'
   ] 
});

const auth : Sequelize = new Sequelize({
    name: 'auth',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    modelPaths: [
        __dirname + '/auth'
    ] 
 });

export {
    employees,
    sakila,
    auth
}