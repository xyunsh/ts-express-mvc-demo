import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export default class Topic extends Model<Topic>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.INTEGER)
    site_id: number;

    @Column(DataType.INTEGER)
    subject: string;
}