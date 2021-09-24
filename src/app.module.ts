import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DbModule, GoodsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
