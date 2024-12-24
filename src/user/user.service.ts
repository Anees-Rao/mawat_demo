import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const createUser = await this.prisma.user.create({
        data: createUserDto,
      });
      return createUser;
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const getUserList = await this.prisma.user.findMany();
      return getUserList;
    } catch (error) {
      throw new Error(`Failed to get user list: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const getUser = await this.prisma.user.findUnique({
        where: { id },
      });
      return getUser;
    } catch (error) {
      throw new Error(`Failed to get user: ${error.message}`);
  }
  }


  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updateUser = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
      return updateUser;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
  }
}

  remove(id: number) {
    try {
      const deleteUser = this.prisma.user.delete({
        where: { id },
      });
      return deleteUser;
    } catch (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  }
}
