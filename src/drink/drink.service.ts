import { Injectable } from '@nestjs/common';

@Injectable()
export class DrinkService {
  private drinks: any;

  async getDrink(): Promise<any> {
    const data = fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    const response = (await data).json();
    return response;
  }
}
