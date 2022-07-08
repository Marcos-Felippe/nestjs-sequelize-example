import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(data) {
    const user = await this.userModel.create(data);
    return user;
  }

  async findAll() {
    const users = await this.userModel.findAll();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, data) {
    const user = await this.userModel.update({ ...data }, { where: { id } });
    return user;
  }

  async remove(id: number) {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });
    await user.destroy();
    return JSON.stringify('User Deleted');
  }
}
