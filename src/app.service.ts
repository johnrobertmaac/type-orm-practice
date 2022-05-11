import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository :Repository<User>
  ){}
  
  getAllPetsByUser(): Promise<User[]>{
    return this.userRepository.find({
      relations:['pet']
    });
  }
  
  getAll(): Promise<User[]>{
    return this.userRepository.find();
  }

  async getOneById(id:number): Promise<User>{
    try {
      const user = await this.userRepository.findOneOrFail(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  createUser(username: string, password: string) : Promise<User>{
    const newUser = this.userRepository.create({
      username : username,
      password : password
    });

    return this.userRepository.save(newUser);
  }

  async updateUser(username: string, id: number): Promise<User>{
    const user = await this.getOneById(id);

    if(user){
      user.username = username;
      return this.userRepository.save(user);
    }
  }

  async deleteUser(id: number): Promise<User>{
    const user = await this.getOneById(id);

    return this.userRepository.remove(user);
  }
}
