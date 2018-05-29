import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { Privilege } from './Privilege';
import { Right } from './Right';

@Table({ 
    tableName:'admin_resource',
    timestamps: true
})
@DefaultScope({
    include:[()=>Privilege]
})
export class Resource extends Model<Resource>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true
    })
    id: number;

    @Column
    slug: string;

    @Column
    name: string;

    @BelongsToMany(() => Privilege, () => Right)
    privileges: Privilege[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}