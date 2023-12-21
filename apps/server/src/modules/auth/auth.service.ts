import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { LoginUserDto } from '../authentication/dto/login-user.dto';
import { PrismaService } from '../services/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async validateUser(username: string, password: string) {
    const user = await this.prismaService.users.findUnique({
      where: { username },
    });

    if (user) {
      const validatePassword = await bcrypt.compare(password, user.password);

      if (validatePassword) {
        return user;
      }
    }
    return null;
  }
}
