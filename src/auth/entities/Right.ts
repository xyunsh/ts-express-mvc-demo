import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey, BelongsToMany } from 'sequelize-typescript';

import { Privilege } from './Privilege';
import { Resource } from './Resource';
import { Role } from './Role';
import { RoleRight } from './RoleRight';

@Table({ tableName:'right'} )
export class Right extends Model<Right> {
  @Column({
    type:DataType.NUMBER,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Privilege)
  @Column
  privilege_id: number;

  @ForeignKey(() => Resource)
  @Column
  resource_id: number;

  @BelongsToMany(() => Role, () => RoleRight)
  roles: Role[];
}