import { PrismaService } from './../service/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(user: Prisma.UserCreateInput): Promise<User>;
    findUsers(params: {
        skip?: number;
        take?: number;
        where?: Prisma.UserWhereInput;
    }): Promise<User[]>;
    updateUser(params: {
        data: Prisma.UserUpdateInput;
        where: Prisma.UserWhereUniqueInput;
    }): Promise<User>;
    deleteUser(params: {
        where: Prisma.UserWhereUniqueInput;
    }): Promise<User>;
}
