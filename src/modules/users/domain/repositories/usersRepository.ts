import { User } from '../entities/user';

export class UsersRepository {
  async save(user: User) {
    return user
  }
}