import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { ToolsService } from './modules/services/tools/tools.service';
import { PrismaService } from './modules/services/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule],
  controllers: [],
  providers: [ToolsService, PrismaService],
})
export class AppModule {}
