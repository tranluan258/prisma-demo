import { Prisma } from '@prisma/client';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  ParseIntPipe,
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
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<User[]> {
    return await this.userService.findUsers({
      where: {
        id: id,
      },
    });
  }
}
