import { Model, Table, Column, DataType, BelongsTo, HasOne, ForeignKey, HasMany, DefaultScope } from 'sequelize-typescript';

import { Gender } from '../enums';

import { Salary } from './Salary';
import { DeptEmp } from './DeptEmp';
import { Title } from './Title';

@Table({tableName:'employees'})
// @DefaultScope({
//     include:[()=> Salary]
// })
export class Employee extends Model<Employee>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        field:'emp_no'
    })
    id: number;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column(DataType.ENUM('F','M'))
    gender: Gender;

    @Column
    birth_date: Date;

    @Column
    hire_date: Date;

    @HasMany(() => Salary)
    salaries: Salary[];

    // @HasMany(() => DeptEmp)
    // departments: DeptEmp[];

}