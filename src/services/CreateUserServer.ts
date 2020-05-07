import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  profile: string;
  name: string;
  email: string;
  zip_code: string;
  address_number: string;
  phone_number: string;
  password: string;
}
class createUserService {
  public async execute({
    profile,
    name,
    email,
    zip_code,
    address_number,
    phone_number,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }
    const hashedPassword = await hash(password, 8);
    const user = usersRepository.create({
      profile,
      name,
      email,
      zip_code,
      address_number,
      phone_number,
      password: hashedPassword,
    });
    await usersRepository.save(user);
    return user;
  }
}
export default createUserService;
