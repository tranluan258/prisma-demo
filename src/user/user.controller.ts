import { Prisma } from '@prisma/client';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async create(@Body() userData: CreateUserDto): Promise<User> {
    return await this.userService.createUser(
      userData as Prisma.UserCreateInput,
    );
  }

  @Get(':id')
  async findUsers(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ): Promise<User[]> {
    return await this.userService.findUsers({
      where: {
        id: id,
      },
    });
  }

  @Patch(':id')
  async updateUser(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
    @Body() userData: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateUser({
      where: {
        id: id,
      },
      data: userData as Prisma.UserUpdateInput,
    });
  }

  @Delete(':id')
  async deleteUser(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ): Promise<User> {
    return this.userService.deleteUser({
      where: {
        id,
      },
    });
  }
}
