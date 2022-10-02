import { PrismaService } from './../service/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Profile } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfile(data: Prisma.ProfileCreateInput): Promise<Profile> {
    return await this.prisma.profile.create({ data: data });
  }
}
