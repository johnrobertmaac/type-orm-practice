import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from 'src/app.module';
import { User } from 'src/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import config from 'ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot(
      config
      ),
      TypeOrmModule.forFeature([
        User
      ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
