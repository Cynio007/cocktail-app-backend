import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/interfaces/user';
import { Response } from 'express';
@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Get('/:id')
  getMyDrinkList(@Param('id') id: string) {
    return this.userService.getMyDrinkList(id);
  }

  @Post('/')
  addUser(@Body() item: UserEntity): any {
    return this.userService.add(item);
  }

  //   @Post('/')
  //   addUser(Response): any {
  //     return this.userService.add(Response);
  //   }
}
