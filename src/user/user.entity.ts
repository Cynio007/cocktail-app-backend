import { Drink } from 'src/drink/drink.entity';
import { UserEntity } from 'src/interfaces/user';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity implements UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToMany((type) => Drink, (entity) => entity.users, { eager: true })
  @JoinTable()
  favDrinks: Drink[];
}
