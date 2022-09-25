import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
