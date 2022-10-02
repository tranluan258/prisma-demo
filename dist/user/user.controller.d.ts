import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: CreateUserDto): Promise<User>;
    findUsers(id: number): Promise<User[]>;
    updateUser(id: number, userData: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
