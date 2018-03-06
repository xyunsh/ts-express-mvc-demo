import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({ tableName:'dept_manager' })
export class DeptManager extends Model<DeptManager>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    emp_no: number;

    @Column({
        type:DataType.STRING,
        primaryKey: true
    })
    dept_no: string;

    @Column
    from_date: Date;

    @Column
    to_date: Date;
}