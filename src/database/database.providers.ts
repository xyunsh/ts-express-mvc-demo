import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';

export const databaseProviders = [
    {
        provide: 'employeesDatabase',
        useFactory: async () => {
            const employees : Sequelize = new Sequelize({
                name: 'employees',
                dialect: 'mysql',
                host: 'localhost',
                username: 'root',
                password: '',
                modelPaths: [
                    path.join(__dirname, '../employees/entities'),
                ]
            });

            //await employees.sync();

            return employees;
        }
    },
    {
        provide: 'adminDatabase',
        useFactory: async () => {
            const auth : Sequelize = new Sequelize({
                name: 'admin',
                dialect: 'mysql',
                host: 'localhost',
                username: 'root',
                password: '',
                modelPaths: [
                    path.join(__dirname, '../admin/entities'),
                ]
            });

            //await auth.sync();

            return auth;
        }
    },
];

// const sakila : Sequelize = new Sequelize({
//    name: 'sakila',
//    dialect: 'mysql',
//    host: 'localhost',
//    username: 'root',
//    password: '',
//    modelPaths: [
//        __dirname + '/sakila'
//    ] 
// });

// const auth : Sequelize = new Sequelize({
//     name: 'auth',
//     dialect: 'mysql',
//     host: 'localhost',
//     username: 'root',
//     password: '',
//     modelPaths: [
//         __dirname + '/auth'
//     ] 
//  });

// export {
//     employees,
//     sakila,
//     auth
// }