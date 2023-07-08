import { DrinkEntity } from 'src/interfaces/drink';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Drink extends BaseEntity implements DrinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 25,
  })
  name: string;

  @Column()
  ingredients: string;

  @Column()
  instruction: string;

  @Column({
    length: 15,
  })
  alcoholic: string;

  @Column()
  img: string;

  @ManyToMany((type) => User, (entity) => entity.favDrinks)
  users: User[];
}
