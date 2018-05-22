import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { Role } from './Role';
import { UserRole } from './UserRole';
import { Right } from './Right';
import { UserRight } from './UserRight';

@Table({ 
    tableName:'admin_user',
    timestamps: true
} )
@DefaultScope({
    attributes:{
        exclude:['password_hashed', 'salt']
    }
})
export class User extends Model<User>{
    @Column({
        type:DataType.INTEGER,
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
    created_ip: string;

    @Column
    status: number;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];

    @BelongsToMany(() => Right, () => UserRight)
    rights: Right[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}