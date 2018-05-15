import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany, ForeignKey } from 'sequelize-typescript';

import { Right } from './Right';

@Table({ tableName:'nav'} )
export class Nav extends Model<Nav>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
    })
    id: number;

    @Column
    display_name: string;

    @Column
    path: string;

    @ForeignKey(() => Right)
    @Column
    right_id: number;

    @Column
    rank: number
}