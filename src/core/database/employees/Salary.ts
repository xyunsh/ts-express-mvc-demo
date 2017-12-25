import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Employee from './Employee';

@Table({tableName:'salaries'})
export default class Salary extends Model<Salary>{
    @Column({
        primaryKey: true,
    })
    @ForeignKey(()=>Employee)
    emp_no: number;

    @Column
    salary: number;
    
    @Column({
        primaryKey: true,
    })
    from_date: Date;

    @Column
    to_date: Date;
}