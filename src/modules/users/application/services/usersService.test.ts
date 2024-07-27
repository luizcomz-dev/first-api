import { User } from '@users/domain/entities/user';
import { UsersRepository } from '@users/domain/repositories/usersRepository';
import { UsersService } from './usersService';

jest.mock('../../domain/repositories/usersRepository');

describe('UsersService', () => {
  let userService: UsersService;
  let usersRepository: jest.Mocked<UsersRepository>;

  beforeEach(() => {
    usersRepository = new UsersRepository() as jest.Mocked<UsersRepository>;
    userService = new UsersService(usersRepository);
  });

  it('should be defined', () => {
    expect(UsersService).toBeDefined();
  });

  it('should create a new user', async () => {
    const userDTO = {
      name: 'John Doe',
      email: 'pHrZ3@example.com',
      password: 'password123',
    }

    const user = new User(userDTO);

    usersRepository.save.mockResolvedValue(user);
    
    const result = await userService.create(userDTO);
    expect(result).toEqual(user);
  })
})