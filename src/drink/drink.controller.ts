import { Controller, Get } from '@nestjs/common';
import { DrinkService } from './drink.service';

@Controller('drink')
export class DrinkController {
  constructor(private drinkService: DrinkService) {}
  @Get('/')
  getDrink(): Promise<any> {
    return this.drinkService.getDrink();
  }
}
