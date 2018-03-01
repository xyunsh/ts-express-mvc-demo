import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany } from 'sequelize-typescript';

import Resource from './Resource';
import Right from './Right';

@Table({ tableName:'privilege'} )
export default class Privilege extends Model<Privilege>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column
    display_name: string;

    @Column
    name: string;

    @HasMany(() => Right)
    rights: Right[];
}