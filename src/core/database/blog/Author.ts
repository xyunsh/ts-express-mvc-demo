import { Model, Table, Column, DataType } from 'sequelize-typescript';

export interface IAuthor {
    id: number,
    name: string
}

@Table
export class Author extends Model<Author> implements IAuthor{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.STRING)
    name: string;
}