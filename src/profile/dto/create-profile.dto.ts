import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsString()
  bio: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  user?: User;
}
