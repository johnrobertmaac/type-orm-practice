import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user.entity';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(
        private service : UserService,
    ){}

    @Get('')
    getAll(){
        return this.service.getAll();
    }

    @Get(':id')
    getOneById(@Param('id') id: string) : any{
        return this.service.getOneById(Number(id));
    }

    @ApiCreatedResponse({type: User})
    @Post()
    save(@Body() body: UserDto){
        return this.service.saveUser(body);
    }

    

}
