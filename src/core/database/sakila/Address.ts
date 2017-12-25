import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export default class Address extends Model<Address>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    address_id: number;

    @Column(DataType.STRING)
    address: string;

    @Column(DataType.STRING)
    address2: string;

    @Column(DataType.STRING)
    district: string;

    @Column(DataType.STRING)
    postal_code: string;

    @Column(DataType.STRING)
    phone: string;
}