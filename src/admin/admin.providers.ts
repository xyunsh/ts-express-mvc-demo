import { Role, User, Resource, Privilege } from './index';

export const adminProviders = [
    { provide: 'RoleRepository', useValue: Role },
    { provide: 'UserRepository', useValue: User },
    { provide: 'ResourceRepository', useValue: Resource },
    { provide: 'RoleRespository', useValue: Role }
]