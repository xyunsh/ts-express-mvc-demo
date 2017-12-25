import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export default class Actor extends Model<Actor>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    actor_id: number;

    @Column(DataType.STRING)
    first_name: string;

    @Column(DataType.STRING)
    last_name: string;

    @Column(DataType.STRING)
    last_update: string;
}