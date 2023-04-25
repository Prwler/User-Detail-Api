import { HttpStatus, Injectable, NotFoundException, Param } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomResponse } from './custom-response.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
      ) {}
    //Create a User
      async addUser( dto: UserDto ): Promise<CustomResponse> {
        const user = await this.UserRepository.save(dto)
        console.log(user);
        if(!user){
          return {
            statusCode:HttpStatus.BAD_REQUEST,
            message: "User creation failed",
           }
         }
        return{
          statusCode:HttpStatus.OK,
          message: "User created successfully",
        }
      }
      //Get all users
      async getAllUsers(): Promise<User[]> {
        const users = await this.UserRepository.find();
          return users;
      }

      //Get user by Id
      // @Get('/users/:id')
      // async getUserById(@Param('id') user_id: number): Promise<User> {
      //   const user = await this.userRepository.getUserById(user_id);
      //     return user;
      // }

      async getUserById(user_id: any): Promise<User[]> {
        const user = await this.UserRepository.find(user_id);
        if (!user) {
          throw new NotFoundException(`User with ID ${user_id} not found`);
        }
        return user;
      }


}
