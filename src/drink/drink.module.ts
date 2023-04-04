import { Module } from '@nestjs/common';
import { DrinkController } from './drink.controller';
import { DrinkService } from './drink.service';
import { UserModule } from 'src/user/user.module';
import { Drink } from './drink.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Drink])],
  controllers: [DrinkController],
  providers: [DrinkService],
  exports: [DrinkService],
})
export class DrinkModule {}
