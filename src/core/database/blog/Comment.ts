import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class Comment extends Model<Comment>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column
    content: string;
}