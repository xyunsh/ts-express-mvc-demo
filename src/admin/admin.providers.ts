import { Role, User } from './index';

export const adminProviders = [
    {
        provide: 'RoleRepository',
        useValue: Role
    },{
        provide: 'UserRepository',
        useValue: User
    }
]