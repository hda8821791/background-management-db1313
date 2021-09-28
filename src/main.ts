import { NestFactory } from '@nestjs/core';
// import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  //? 資源跨域共享
  app.enableCors();
  //? 靜態文件託管
  // app.useStaticAssets('uploads', {
  //   prefix: '/


  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const PORP = parseInt(process.env.PORT) || 5000;

  await app.listen(PORP, '0.0.0.0');
  console.log(`http://localhost:${PORP}/api-docs`);
}
bootstrap();
