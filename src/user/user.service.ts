import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drink } from 'src/drink/drink.entity';
import {
  AlreadyTakenEmailAdr,
  RegisterUser,
  UserEntity,
  WrongEmailAdr,
} from 'src/interfaces/user';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { hashPwd } from 'src/utils/hash-pwd';
import { DrinkEntity } from 'src/interfaces/drink';

@Injectable()
export class UserService {
  filter(user: User): any {
    const { id, email } = user;
    return { id, email };
  }
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
    @InjectRepository(Drink) private DrinkRepository: Repository<Drink>,
  ) {}

  async getMyDrinkList(user: UserEntity): Promise<DrinkEntity[]> {
    const { id } = user;
    const userDetails = await this.UserRepository.findOne(id);

    return userDetails.favDrinks;
  }

  async addUser(newUser: RegisterDto): Promise<RegisterUser> {
    const newMember = new User();
    newMember.email = newUser.email;
    newMember.pwdHash = hashPwd(newUser.pwd);

    const findByEmail = await this.UserRepository.find({
      email: newUser.email,
    });
    console.log(await findByEmail);
    if ((await findByEmail).length !== 0) {
      return {
        isSuccess: false,
        isNewEmail: false,
      };
    }

    if (!newUser.email.includes('@')) {
      return { isEmail: false };
    }

    await this.UserRepository.save(newMember);
    return this.filter(newMember);
  }

  async addDrink(drinkItem, user): Promise<DrinkEntity> {
    const newDrink = new Drink();
    const arrToStr = drinkItem.ingredients.join(',');
    drinkItem.ingredients = arrToStr;
    drinkItem.id = Number(drinkItem.id);

    const findDrinkInDb = await this.DrinkRepository.find({
      id: drinkItem.id,
    });

    if ((await findDrinkInDb).length === 0) {
      await this.DrinkRepository.save(drinkItem);
    }

    const theSameDrink = (await user).favDrinks.find(
      (el) => el.id === drinkItem.id,
    );
    if (theSameDrink) {
      await user.save();
      return drinkItem;
    }
    user.favDrinks.push(drinkItem);

    await user.save();
    return drinkItem;
  }

  async deleteDrink(id, user): Promise<DrinkEntity> {
    const idItem = (await user).favDrinks.findIndex(
      (el) => el.id === Number(id),
    );
    console.log(idItem);
    user.favDrinks.splice(idItem, 1);

    await user.save();
    return user.favDrinks;
  }
}
