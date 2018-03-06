import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany } from 'sequelize-typescript';

import { Role } from './Role';
import { UserRole } from './UserRole';

@Table({ tableName:'user'} )
export class User extends Model<User>{
    @Column({
        type:DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type:DataType.STRING
    })
    login_name: string;

    @Column
    email: string;

    @Column
    password_hashed: string;

    @Column
    salt: string;

    @Column
    display_name: string;

    @Column
    mobile: string;

    @Column
    create_time: Date;

    @Column
    create_ip: string;

    @Column
    status: number;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];
}