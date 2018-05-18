import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany } from 'sequelize-typescript';

import { Resource } from './Resource';
import { Right } from './Right';

@Table({ tableName:'admin_privilege'} )
export class Privilege extends Model<Privilege>{
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