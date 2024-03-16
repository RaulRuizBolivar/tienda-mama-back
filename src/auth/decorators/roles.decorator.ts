import { SetMetadata } from '@nestjs/common';
import { Role } from 'types/role.type';

export const Roles = (role: Role) => SetMetadata('roles', role);
