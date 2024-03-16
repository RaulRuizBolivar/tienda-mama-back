import { UseGuards, applyDecorators } from '@nestjs/common';
import { IsAdminGuard } from 'auth/guard/isAdmin.guard';

export const isAdmin = () => {
  return applyDecorators(UseGuards(IsAdminGuard));
};
