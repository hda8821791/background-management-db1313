import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Goods extends Document {
  @ApiProperty({ description: '商品名稱' })
  @Prop()
  name: string;

  @ApiProperty({ description: '商品價格' })
  @Prop()
  price: string;

  @ApiProperty({ description: '商品圖片' })
  @Prop()
  coverImg: string;

  @ApiProperty({ description: '商品詳情' })
  @Prop()
  goodsDetail: string;
}
