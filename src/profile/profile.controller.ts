import { ProfileService } from './profile.service';
import { Controller } from '@nestjs/common';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
}
