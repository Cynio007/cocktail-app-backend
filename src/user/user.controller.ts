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
import { RegisterUser, UserEntity } from 'src/interfaces/user';
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
  @UseGuards(AuthGuard('jwt'))
  getMyDrinkList(@UserObj() user: User): Promise<DrinkEntity[]> {
    return this.userService.getMyDrinkList(user);
  }

  @Post('/register')
  addUser(@Body() newUser: RegisterDto): Promise<RegisterUser> {
    return this.userService.addUser(newUser);
  }

  @Post('/addDrink')
  @UseGuards(AuthGuard('jwt'))
  addDrink(
    @Body() drinkItem: DrinkEntity[],
    @UserObj() user: User,
  ): Promise<DrinkEntity> {
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
