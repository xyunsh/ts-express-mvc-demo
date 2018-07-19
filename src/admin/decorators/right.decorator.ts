import { ReflectMetadata } from '@nestjs/common';
import { RIGHTS_METADATA, PRIVILEGE_METADATA, RESOURCE_METADATA, Privileges, Resources } from '../constants';

export const WithRights = (...rights: string[][]) => ReflectMetadata(RIGHTS_METADATA, rights); 

export const BindResource = (resource: Resources ) => ReflectMetadata(RESOURCE_METADATA, resource);

export const NeedPrivilege = (privilege: Privileges ) => ReflectMetadata(PRIVILEGE_METADATA, privilege);