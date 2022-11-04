import { Module } from '@nestjs/common';
import { UserCreateService } from './user-create.service';
import { UserCreateController } from './user-create.controller';

@Module({
  providers: [UserCreateService],
  controllers: [UserCreateController]
})
export class UserCreateModule {}
