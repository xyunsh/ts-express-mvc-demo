import { Role, User } from './index';

export const authProviders = [
    {
        provide: 'RoleRepository',
        useValue: Role
    },{
        provide: 'UserRepository',
        useValue: User
    }
]