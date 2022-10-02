import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Profile, Prisma } from '@prisma/client';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(
    @Body() createProfileData: CreateProfileDto,
  ): Promise<Profile> {
    return await this.profileService.createProfile(
      createProfileData as Prisma.ProfileCreateInput,
    );
  }
}
