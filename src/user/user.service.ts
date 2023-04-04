import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drink } from 'src/drink/drink.entity';
import { UserEntity } from 'src/interfaces/user';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async getMyDrinkList(id: string): Promise<any> {
    const userDetails = await this.UserRepository.find({ id });
    return userDetails[0].favDrinks;
  }

  async add(item): Promise<any> {
    const newMember = new User();
    newMember.email = item.email;

    await this.UserRepository.save(newMember);
    return newMember;
  }
}
