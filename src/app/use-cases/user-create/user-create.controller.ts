import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserCreateController {
  @MessagePattern('create.user')
  readMessage(@Payload() message: any) {
    console.log(message);
  }
}
