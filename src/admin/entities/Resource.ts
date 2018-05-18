import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany } from 'sequelize-typescript';

import { Right } from './Right';

@Table({ tableName:'admin_resource'} )
export class Resource extends Model<Resource>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
    })
    id: number;

    @Column
    slug: string;

    @Column
    name: string;

    @HasMany(() => Right)
    rights: Right[];
}