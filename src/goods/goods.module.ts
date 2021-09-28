import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    //? 異步註冊
    MulterModule.registerAsync({
      useFactory: () => ({
        //? 存取位置
        dest: './uploads',
      }),
    }),
  ],
  controllers: [GoodsController],
})
export class GoodsModule {}
