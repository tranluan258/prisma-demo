import { PrismaService } from './../service/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
}
