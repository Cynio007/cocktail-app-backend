import { Controller, Get, Param } from '@nestjs/common';
import { BadResponse, DrinkResponse } from 'src/interfaces/drink';
import { DrinkService } from './drink.service';

@Controller('drink')
export class DrinkController {
  constructor(private drinkService: DrinkService) {}

  @Get('/')
  getRandomDrink(): Promise<DrinkResponse> {
    return this.drinkService.getRandomDrink();
  }

  @Get('/:name')
  getOneDrink(
    @Param('name') name: string,
  ): Promise<DrinkResponse | BadResponse> {
    // try {
    return this.drinkService.getOneDrink(name);
    // } catch (error) {
    //   throw new Error('uuups');
    // }
  }
}
