import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey } from 'sequelize-typescript';

import { Role } from './Role';
import { User } from './User';

@Table({ tableName:'admin_user_role'} )
export class UserRole extends Model<UserRole> {

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
}