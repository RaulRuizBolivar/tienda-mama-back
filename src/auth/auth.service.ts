import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.usersService.findOneByEmail(registerDto.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    registerDto.password = await bcryptjs.hash(registerDto.password, 12);

    const newUser = await this.usersService.create(registerDto);

    //No return user password
    delete newUser.password;

    return newUser;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.email);

    if (!user?.password || !user.email)
      throw new UnauthorizedException('Authentication failed');

    const isPasswordValid = await bcryptjs.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Authentication failed');
    }

    const payload = { email: user.email, isAdmin: user.isAdmin };

    const token = await this.jwtService.signAsync(payload);

    const { email, isAdmin } = user;

    return { token, email, isAdmin };
  }

  private getJWTConstants(): string {
    return process.env.JWT_SECRET;
  }
}
