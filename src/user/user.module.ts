import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DrinkModule } from 'src/drink/drink.module';
import { DrinkService } from 'src/drink/drink.service';
import { DrinkController } from 'src/drink/drink.controller';
import { Drink } from 'src/drink/drink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Drink])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
