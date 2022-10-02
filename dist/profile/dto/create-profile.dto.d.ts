import { User } from '@prisma/client';
export declare class CreateProfileDto {
    bio: string;
    userId: number;
    user?: User;
}
