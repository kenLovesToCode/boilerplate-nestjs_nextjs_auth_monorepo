import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { Users } from './users.model';
import { PrismaService } from '../services/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async getUser(id: number): Promise<Users | null> {
    return this.prisma.users.findUnique({ where: { id: Number(id) } });
  }

  async createUser(data: Users): Promise<Users> {
    const isExistingUser = await this.prisma.users.findUnique({
      where: {
        username: data.username,
      },
    });

    if (isExistingUser) {
      throw new ConflictException('Username already exists');
    }

    data.password = await bcrypt.hash(data.password, 10);
    return this.prisma.users.create({
      data,
    });
  }

  async updateUser(id: number, data: Users): Promise<Users> {
    return this.prisma.users.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  async deleteUser(id: number): Promise<Users> {
    return this.prisma.users.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
