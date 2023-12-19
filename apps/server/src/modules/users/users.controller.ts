import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  async createUser(@Body() data: Users) {
    return this.usersService.createUser(data);
  }

  @Delete(':id')
  async deleteUser(id: number) {
    return this.usersService.deleteUser(id);
  }

  @Put(':id')
  async updateUser(id: number, @Body() data: Users) {
    return this.usersService.updateUser(id, data);
  }
}
