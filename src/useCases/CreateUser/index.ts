import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { UserRepository } from './../../repositories/implementations/UserRepository';
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";

const mailtrapMailProvider = new MailtrapMailProvider();
const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }