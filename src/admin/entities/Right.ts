import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey, BelongsToMany, HasOne, BelongsTo } from 'sequelize-typescript';

import { Privilege } from './Privilege';
import { Resource } from './Resource';
import { Role } from './Role';
import { RoleRight } from './RoleRight';

@Table({ tableName:'admin_right'} )
@DefaultScope({
  include:[()=>Resource, ()=>Privilege]
})
export class Right extends Model<Right> {
  @Column({
    type:DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Privilege)
  @Column
  privilege_id: number;

  @BelongsTo(()=>Privilege)
  privilege: Privilege;

  @ForeignKey(() => Resource)
  @Column
  resource_id: number;

  @BelongsTo(()=>Resource)
  resource: Resource;

  @BelongsToMany(() => Role, () => RoleRight)
  roles: Role[];
}