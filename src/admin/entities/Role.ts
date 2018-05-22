import { Model, Table, Column, DataType, HasMany, DefaultScope, BelongsToMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { User } from './User';
import { UserRole } from './UserRole';
import { Right } from './Right';
import { RoleRight } from './RoleRight';

@Table({ 
    tableName:'admin_role',
    timestamps: true
} )
export class Role extends Model<Role>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true
    })
    id: string;

    @Column({
        type:DataType.STRING
    })
    name: string;

    @Column({ type: DataType.BOOLEAN })
    status: boolean;

    @BelongsToMany(() => Role, () => UserRole)
    users: User[];

    @BelongsToMany(() => Right, () => RoleRight)
    rights: Right[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}