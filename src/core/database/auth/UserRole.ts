import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey } from 'sequelize-typescript';

import Role from './Role';
import User from './User';

@Table({ tableName:'user_role'} )
export default class UserRole extends Model<UserRole> {

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
}