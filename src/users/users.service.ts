import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto ->', createUserDto); // TODO delete
    const userFound = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    console.log('userFound ->', userFound); // TODO delete

    if (userFound) {
      return new HttpException('User already exist', HttpStatus.CONFLICT);
    }

    const newUser = this.userRepository.create({
      ...createUserDto,
      isAdmin: Boolean(createUserDto.isAdmin),
    });

    console.log('newUser ->', newUser); // TODO delete

    return this.userRepository.save(newUser);
  }

  async findOne(id: number) {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.userRepository.update({ id }, updateUserDto);
  }

  async remove(id: number) {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.userRepository.delete({ id });
  }
}
