import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export default class Download extends Model<Download>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.INTEGER)
    topic_id: number;

    @Column(DataType.STRING)
    download_url: string;

    @Column(DataType.INTEGER)
    status: number;
}