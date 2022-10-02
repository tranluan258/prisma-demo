import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import { Profile } from '@prisma/client';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createProfile(createProfileData: CreateProfileDto): Promise<Profile>;
}
