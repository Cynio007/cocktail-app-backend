import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: 'http://localhost:3000', //dodaje możliwośc łączenia z backendem z innej domeny. Zmienić na właściwy, gdy nie używamy lokalnie na swoim PC
  // });
  // app.setGlobalPrefix('api');
  app.enableCors({
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    origin: 'http://localhost:3000',
  });
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
