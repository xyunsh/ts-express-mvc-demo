import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany, ForeignKey, CreatedAt, UpdatedAt, AllowNull } from 'sequelize-typescript';

import { Right } from './Right';
import { IHierarchizable } from '@interface/IHierarchizable';

@Table({ 
    tableName:'admin_menu',
    timestamps:true
})
export class Menu extends Model<Menu> implements IHierarchizable {
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true
    })
    id: number;

    @Column({
        allowNull:false
    })
    title: string;

    @Column
    icon: string;

    @ForeignKey(() => Menu)
    @Column
    parent_id: number

    @Column({
        allowNull:false
    })
    path: string;

    @ForeignKey(() => Right)
    @Column
    right_id: number;

    @Column({
        allowNull:false,
        defaultValue:0
    })
    rank: number;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;

    children:Array<IHierarchizable>;
}