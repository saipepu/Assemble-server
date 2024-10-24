import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  async getUser() {
    return {
      id: 1,
      name: 'John Doe',
      email: ''
    };
  }
}
