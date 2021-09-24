import { SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/interface/users.interface';

export const UserSchema = SchemaFactory.createForClass(User);
