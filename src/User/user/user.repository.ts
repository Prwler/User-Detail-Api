import { Repository} from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
    async getAllUsers(): Promise<User[]> {
        return await this.find();
    }
  
    async getUserById(user_id: any): Promise<User> {
        const user = this.findById(user_id);
        return await this.findOne(user_id);
      }
    findById(user_id: any) {
        throw new Error('Method not implemented.');
    }
      

    // async getUserById(id: number): Promise<User> {
    //     const user = await this.findOne({ where: { user_id: id } });
    //     return user;
    //   }
}