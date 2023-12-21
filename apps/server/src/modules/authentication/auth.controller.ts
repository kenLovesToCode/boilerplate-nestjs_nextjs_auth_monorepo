// import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LoginUserDto } from './dto/login-user.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @HttpCode(HttpStatus.OK)
//   @Post('login')
//   async login(@Body() loginUserDto: LoginUserDto) {
//     try {
//       return await this.authService.login(loginUserDto);
//     } catch (error) {
//       throw error;
//     }
//   }
// }
