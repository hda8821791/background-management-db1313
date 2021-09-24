import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { MulterModule } from '@nestjs/platform-express';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [
    //? 異步註冊
    MulterModule.registerAsync({
      useFactory: () => ({
        //? 存取位置
        dest: 'uploads',
      }),
    }),
    DbModule,
  ],
  controllers: [GoodsController],
})
export class GoodsModule {}
