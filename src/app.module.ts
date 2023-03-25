import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinkController } from './drink/drink.controller';
import { DrinkService } from './drink/drink.service';

@Module({
  imports: [],
  controllers: [AppController, DrinkController],
  providers: [AppService, DrinkService],
})
export class AppModule {}
