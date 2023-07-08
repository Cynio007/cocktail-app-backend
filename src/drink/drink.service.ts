import { Injectable } from '@nestjs/common';
import { BadResponse, DrinkResponse } from 'src/interfaces/drink';

@Injectable()
export class DrinkService {
  async getRandomDrink(): Promise<DrinkResponse> {
    const data = await fetch(
      'https://thecocktaildb.com/api/json/v1/1/random.php',
    );
    const response = (await data).json();
    const response2 = (await response).drinks[0];
    const ingredientsArr = await [];
    for (const key in response2) {
      if (key.includes('Ingredient') && response2[key]) {
        ingredientsArr.push(response2[key]);
      }
    }
    const result: DrinkResponse = {
      id: response2.idDrink,
      name: response2.strDrink,
      instruction: response2.strInstructions,
      alcoholic: response2.strAlcoholic,
      ingredients: ingredientsArr,
      img: response2.strDrinkThumb,
    };

    return result;
  }

  async getOneDrink(name: string): Promise<DrinkResponse | BadResponse> {
    const data = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    );

    const response = (await data).json();
    if (!(await response).drinks) {
      return {
        isSuccess: false,
      };
    }
    const response2 = (await response).drinks[0];
    const ingredientsArr = await [];

    for (const key in response2) {
      if (key.includes('Ingredient') && response2[key]) {
        ingredientsArr.push(response2[key]);
      }
    }
    const result: DrinkResponse = {
      id: response2.idDrink,
      name: response2.strDrink,
      instruction: response2.strInstructions,
      alcoholic: response2.strAlcoholic,
      ingredients: ingredientsArr,
      img: response2.strDrinkThumb,
    };
    return result;
  }
}
