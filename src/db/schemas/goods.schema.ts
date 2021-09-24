import { SchemaFactory } from '@nestjs/mongoose';
import { Goods } from 'src/interface/goods.interface';

export const GoodsSchema = SchemaFactory.createForClass(Goods);
