import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/interfaces/user';
import { Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from 'src/decorators/user-obj.decorator';
import { User } from './user.entity';
import { DrinkEntity, DrinkResponse } from 'src/interfaces/drink';
@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Get('/myList')
  @UseGuards(AuthGuard('jwt')) //@Param('id') id:string,
  getMyDrinkList(@UserObj() user: User) {
    console.log(user);
    return this.userService.getMyDrinkList(user);
  }

  @Post('/register')
  addUser(@Body() newUser: RegisterDto): any {
    return this.userService.addUser(newUser);
  }

  @Post('/addDrink')
  @UseGuards(AuthGuard('jwt'))
  addDrink(@Body() drinkItem: DrinkEntity[], @UserObj() user: User): any {
    return this.userService.addDrink(drinkItem, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'))
  removeDrink(
    @Param('id') id: number,
    @UserObj() user: User,
  ): Promise<DrinkEntity> {
    return this.userService.deleteDrink(id, user);
  }
}
