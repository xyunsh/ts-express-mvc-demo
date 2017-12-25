import { Model, Table, Column, DataType, DefaultScope, ForeignKey } from 'sequelize-typescript';

import Employee from './Employee';
import Department from './Department';

@Table({tableName:'dept_emp'})
// @DefaultScope({
//     include:[()=>Department, ()=>Employee]
// })
export default class DeptEmp extends Model<DeptEmp>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    @ForeignKey(()=>Employee)
    emp_no: number;

    @Column({ 
        type:DataType.STRING,
        primaryKey: true
    })
    @ForeignKey(()=>Department)
    dept_no: string;

    @Column
    from_date: Date;

    @Column
    to_date: Date;
}