import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
