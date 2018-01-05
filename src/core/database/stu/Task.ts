import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export default class Task extends Model<Task>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.STRING)
    url_format: string;

    @Column(DataType.INTEGER)
    start: number;

    @Column(DataType.INTEGER)
    end: number;

    @Column(DataType.INTEGER)
    done: number
}