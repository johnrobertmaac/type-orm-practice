import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository :  Repository<User>
    ){}

     getAll(): Promise<User[]>{
         return this.userRepository.find();
     }

     getOneById(id: number) : Promise<User>{
         try {
            return this.userRepository.findOneOrFail(id);
         } catch (error) {
            throw error;             
         }
     }

     saveUser(user: UserDto){
         const _user = this.userRepository.create(user);

         return this.userRepository.save(_user)
     }


}
