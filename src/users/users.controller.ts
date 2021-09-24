import { User } from '../interface/users.interface';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Crud({
  model: User,
})
@ApiTags('用戶')
@Controller('users')
export class UsersController {
  constructor(
    @InjectModel('USER_MODEL')
    private readonly model: Model<User>,
  ) {}
}
