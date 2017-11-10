import { Sequelize } from 'sequelize-typescript';

const sequelize : Sequelize = new Sequelize({
    name: 'blog',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    modelPaths: [
        __dirname + '/blog/',
    ]
});

export default sequelize;