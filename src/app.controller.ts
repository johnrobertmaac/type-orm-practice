import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<User[]> {
    // return await this.appService.createUser('admin','1234');

    // return await this.appService.updateUser('admin1',1);

    // return await this.appService.getAll();

    return await this.appService.getAllPetsByUser();
  }
}
