import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //? 資源跨域共享
  app.enableCors();

  //? 靜態文件託管
  app.useStaticAssets('uploads', {
    prefix: '/uploads',
  });

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const PORP = 5000;

  await app.listen(PORP);
  console.log(`http://localhost:${PORP}/api-docs`);
}
bootstrap();
