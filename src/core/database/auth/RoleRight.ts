import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey } from 'sequelize-typescript';

import Role from './Role';
import Right from './Right';

@Table({ tableName:'role_right'} )
export default class RoleRight extends Model<RoleRight> {

  @ForeignKey(() => Right)
  @Column
  right_id: number;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
}