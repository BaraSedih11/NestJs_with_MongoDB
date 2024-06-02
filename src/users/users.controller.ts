import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }
  @Get()
  getUser(): string {
    return 'Hello';
  }
  @Get()
  getAllUsers(): string {
    return 'Hello All';
  }
}
