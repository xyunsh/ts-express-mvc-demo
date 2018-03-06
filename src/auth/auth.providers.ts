import { Role }  from './entities/Role';
import { User } from './entities/User';

export const authProviders = [
    {
        provide: 'RoleRepository',
        useValue: Role
    },{
        provide: 'UserRepository',
        useValue: User
    }
]