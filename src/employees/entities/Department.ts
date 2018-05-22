import { Model, Table, Column, DataType, HasMany, DefaultScope } from 'sequelize-typescript';

import { DeptEmp } from './DeptEmp';
import { DeptManager } from './DeptManager';

@Table({ tableName:'departments'} )
export  class Department extends Model<Department>{
    @Column({
        type:DataType.STRING,
        primaryKey: true,
        field: 'dept_no',
    })
    id: string;

    @Column({
        type:DataType.STRING
    })
    dept_name: string;


    @HasMany(() => DeptEmp)
    employees: DeptEmp[];
}