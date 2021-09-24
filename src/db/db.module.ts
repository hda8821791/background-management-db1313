import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodsSchema } from './schemas/goods.schema';
import { UserSchema } from './schemas/user.schema';

const models = MongooseModule.forFeature([
  {
    name: 'GOODS_MODEL',
    schema: GoodsSchema,
  },
  {
    name: 'USER_MODEL',
    schema: UserSchema,
  },
]);

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hda8821791:a0933483022@cluster0.yfz9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    models,
  ],
  exports: [models],
})
export class DbModule {}
