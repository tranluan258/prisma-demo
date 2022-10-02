import { PrismaService } from './../service/prisma/prisma.service';
import { Prisma, Profile } from '@prisma/client';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProfile(data: Prisma.ProfileCreateInput): Promise<Profile>;
}
