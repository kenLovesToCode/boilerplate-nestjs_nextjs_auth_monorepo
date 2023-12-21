// import { Injectable, NotFoundException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';

// import { PrismaService } from '../services/prisma/prisma.service';
// import { UsersService } from '../users/users.service';
// import { LoginUserDto } from './dto/login-user.dto';
// import { RegisterUserDto } from './dto/register-user.dto';
// import { Users } from '../users/users.model';

// @Injectable()
// export class AuthService {
//   constructor(
//     private jwtService: JwtService,
//     private readonly prismaService: PrismaService,
//     private readonly usersService: UsersService,
//   ) {}

//   async login(loginUserDto: LoginUserDto) {
//     const { username, password } = loginUserDto;

//     const users = await this.prismaService.users.findUnique({
//       where: { username },
//     });

//     if (!users) {
//       throw new NotFoundException('User not found');
//     }

//     const validatePassword = await bcrypt.compare(password, users.password);

//     if (!validatePassword) {
//       throw new NotFoundException('Invalid password');
//     }

//     return {
//       access_token: this.jwtService.signAsync({ username }),
//     };
//   }

//   async register(createUserDto: RegisterUserDto) {
//     const createUser = new Users();
//     createUser.username = createUserDto.username;
//     createUser.email = createUserDto.email;
//     createUser.name = createUserDto.name;
//     createUser.password = await bcrypt.hash(createUserDto.password, 10);

//     const user = await this.usersService.createUser(createUser);

//     return {
//       access_token: this.jwtService.sign({ username: user.username }),
//     };
//   }
// }
