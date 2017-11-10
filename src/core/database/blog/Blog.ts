import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class Blog extends Model<Blog>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.STRING)
    title: string;

    @Column
    content: string;
}