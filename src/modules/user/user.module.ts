import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
  exports: [UserService],
})
export class UserModule {}
