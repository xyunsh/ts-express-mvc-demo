import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey } from 'sequelize-typescript';

import { User } from './User';
import { Right } from './Right';

@Table({ tableName:'admin_user_right'} )
export class UserRight extends Model<UserRight> {

  @ForeignKey(() => Right)
  @Column
  right_id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;
}