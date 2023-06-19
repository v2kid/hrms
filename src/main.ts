import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule, { cors: false });
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3001);
=======
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Human Resource Management System')
    .setDescription('The hrrms API description')
    .setVersion('1.0')
    .addTag('hrms')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
>>>>>>> e1fce1da60d94939e5010fa11814f4df25e363bb
}

bootstrap();
