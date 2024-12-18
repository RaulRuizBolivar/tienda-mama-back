import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConfig } from './config/jwt.config';

@Module({
  imports: [JwtModule.registerAsync(jwtConfig), UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
