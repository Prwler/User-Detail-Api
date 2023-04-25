import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user/user.module';
import {TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserController } from './User/user/user.controller';
import { UserService } from './User/user/user.service';
import { UserRepository } from './User/user/user.repository';
import { User } from './User/user/user.entity';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'W!lson2003',
  database: 'userdetaildb',
  autoLoadEntities: true,
  synchronize: false,
}

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([User]),TypeOrmModule.forRoot(ormOptions)],
  controllers: [AppController,UserController],
  providers: [UserRepository,AppService,UserService,],
})
export class AppModule {}
