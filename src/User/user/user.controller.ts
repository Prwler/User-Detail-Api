import { Body, Controller, Delete, Get, HttpStatus, Param, Post,} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiCreatedResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import {CustomResponse} from './custom-response.interface';
import { User } from './user.entity';

@ApiTags('')
@Controller("/users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("new_user")
    @ApiBody({type: UserDto})
    //@ApiCreatedResponse({description: "User created successfully"})
    async addUser(@Body()  userDto: UserDto): Promise<CustomResponse>{
      return  this.userService.addUser(userDto);
    }
    @Get("get_all_users")
    async getAllUsers() {
      const users = await this.userService.getAllUsers();
      return { data: users };
    }

    @Get("users_by_id/:id")
    async getUserById(@Param('id') user_id: number): Promise<User> {
      const user = await this.userService.getUserById(user_id);
      return user;
    }

    @Delete("users_by_id/:user_id")
    async deleteUserById(@Param('user_id') user_id: number): Promise<CustomResponse>{
      return await this.userService.deleteUserById(user_id);
    }
}
