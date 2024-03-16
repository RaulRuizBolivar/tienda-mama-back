import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!role) return false;

    const { user } = context.switchToHttp().getRequest();

    console.log({
      role: role,
      'user.role': user.role,
      areSame: role === user.role,
    }); // TODO delete

    return role === user.role;
  }
}
