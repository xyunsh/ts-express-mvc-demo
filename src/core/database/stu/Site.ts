import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export default class Site extends Model<Site>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.STRING)
    domain: string;
}