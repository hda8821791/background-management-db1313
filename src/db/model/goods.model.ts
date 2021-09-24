import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
  },
})
export class GoodsDto {
  @ApiProperty({ description: '商品名稱' })
  @prop()
  name: string;

  @ApiProperty({ description: '商品價格' })
  @prop()
  price: string;

  @ApiProperty({ description: '商品圖片' })
  @prop()
  coverImg: string;

  @ApiProperty({ description: '商品詳情' })
  @prop()
  goodsDetail: string;
}
