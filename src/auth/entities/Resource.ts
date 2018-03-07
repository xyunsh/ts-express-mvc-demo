import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany } from 'sequelize-typescript';

import { Right } from './Right';

@Table({ tableName:'resource'} )
export class Resource extends Model<Resource>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
    })
    id: number;

    @Column
    display_name: string;

    @Column
    name: string;

    @HasMany(() => Right)
    rights: Right[];
}