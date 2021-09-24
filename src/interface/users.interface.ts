import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { hashSync } from 'bcryptjs';

@Schema({ timestamps: true })
export class User extends Document {
  @ApiProperty({ description: '用戶名稱' })
  @Prop()
  username: string;

  @ApiProperty({ description: '用戶密碼' })
  @Prop({
    select: true,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;
}
