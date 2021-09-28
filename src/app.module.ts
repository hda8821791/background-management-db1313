import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [DbModule, GoodsModule, UsersModule,ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/'),
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
