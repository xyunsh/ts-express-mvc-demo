import { Role, User, Resource, Privilege, Menu, Right } from "./index";

export const adminProviders = [
    { provide: "RoleRepository", useValue: Role },
    { provide: "UserRepository", useValue: User },
    { provide: "ResourceRepository", useValue: Resource },
    { provide: "RoleRepository", useValue: Role },
    { provide: "MenuRepository", useValue: Menu },
    { provide: "PrivilegeRepository", useValue: Privilege },
    { provide: "RightRespository", useValue: Right },
];
