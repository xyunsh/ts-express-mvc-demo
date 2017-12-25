import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({tableName:'titles'})
export default class Title extends Model<Title>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    emp_no: number;

    @Column({
        primaryKey: true
    })
    title: string;

    @Column({
        primaryKey: true
    })
    from_date: Date;

    @Column
    to_date: Date;
}