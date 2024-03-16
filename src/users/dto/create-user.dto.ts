import { Role } from 'types/role.type';

export class CreateUserDto {
  email: string;
  password: string;
  role?: Role;
}
