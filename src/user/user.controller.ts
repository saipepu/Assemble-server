import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  // test
  // GET /user
  @Get() getUser() {
    return this.userService.getUser();
  }
}
