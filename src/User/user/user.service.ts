import { HttpStatus, Injectable, NotFoundException, Param } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomResponse } from './custom-response.interface';
import { exists } from 'fs';

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

      async getUserById(user_id: any): Promise<User> {
        return await this.UserRepository.findOne({where: {user_id: user_id}});

        //  const user = await this.UserRepository.findOne(user_id);
        //  if (!user) {
        //     throw new NotFoundException(`User with ID ${user_id} not found`);
        //   }
        //  return user;
      }

      async deleteUserById(user_id: number): Promise<CustomResponse>{
        const user = await this.UserRepository.delete({user_id: user_id});
          return{
            statusCode: HttpStatus.OK,
            message: "Deleted user"
          }
      }
}
