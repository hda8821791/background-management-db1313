import { Goods } from '../interface/goods.interface';
import { Get, UploadedFile } from '@nestjs/common';
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Express } from 'express';

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
      // url: `http://localhost:3000/uploads/${files[0].filename}`,
      url: `https://background-management-db1313.herokuapp.com/uploads/${files[0].filename}`,
    };
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }

  @Get('menu')
  getMenu() {
    return {
      menu: [
        {
          title: '商品管理',
          icon: 'el-icon-goods',
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
          icon: 'el-icon-user',
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
