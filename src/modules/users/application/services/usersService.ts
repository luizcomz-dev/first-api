import { User } from '../../domain/entities/user';
import { UserDTO } from '../dto/userDTO';

export class UsersService {
  constructor(private readonly usersRepository: any) {}

  async create(userDTO: UserDTO) {
    const user = new User(userDTO)
    return await this.usersRepository.save(user)
  }
}