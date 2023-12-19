import { Injectable } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { Users } from './users.model';

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
    return this.prisma.users.create({ data });
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
