export interface DrinkResponse {
  id: string;
  name: string;
  ingredients: string[];
  instruction: string;
  alcoholic: string;
  img: string;
}

export type BadResponse = {
  isSuccess: false;
};

export interface DrinkEntity {
  id: number;
  name: string;
  ingredients: string;
  instruction: string;
  alcoholic: string;
  img: string;
}
