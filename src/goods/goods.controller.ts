import { Goods } from '../interface/goods.interface';
import { Get } from '@nestjs/common';
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Crud({
  model: Goods,
})
@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(
    @InjectModel('GOODS_MODEL')
    private readonly model: Model<Goods>,
  ) {}

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return {
      url: `https://background-management-db1313.herokuapp.com/uploads/${files[0].filename}`,
    };
  }

  @Get('menu')
  getMenu() {
    return {
      menu: [
        {
          title: '商品管理',
          children: [
            {
              path: '/goods/goods-list',
              title: '商品列表',
            },
            {
              path: '/goods/goods-info',
              title: '商品詳情',
            },
          ],
        },
        {
          title: '用戶管理',
          children: [
            {
              path: '/user/user-list',
              title: '用戶列表',
            },
            {
              path: '/user/user-setting',
              title: '用戶設定',
            },
          ],
        },
      ],
    };
  }
}
