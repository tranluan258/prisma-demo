import { PrismaService } from './../service/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findUsers(params: {
    skip?: number;
    take?: number;
    where?: Prisma.UserWhereInput;
  }): Promise<User[]> {
    const { where } = params;
    return this.prisma.user.findMany({
      where,
    });
  }

  async updateUser(params: {
    data: Prisma.UserUpdateInput;
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      where: where,
      data: data,
    });
  }

  async deleteUser(params: {
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    const { where } = params;
    return this.prisma.user.delete({
      where: where,
    });
  }
}
