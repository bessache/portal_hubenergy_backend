import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import CreateUserService from '../services/CreateUserServer';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const {
    profile,
    name,
    email,
    zip_code,
    address_number,
    phone_number,
    password,
  } = request.body;
  const createUser = new CreateUserService();
  const user = await createUser.execute({
    profile,
    name,
    email,
    zip_code,
    address_number,
    phone_number,
    password,
  });
  delete user.password;

  return response.json(user);
});
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const UpdateUserAvatar = new UpdateUserAvatarService();
    const user = await UpdateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });
    delete user.password;
    return response.json({ user });
  },
);

export default usersRouter;
