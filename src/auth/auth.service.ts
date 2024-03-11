import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ) { }

    async signUp(authCredentialsDto: AuthCredentialsDTO): Promise<void> {
        return this.usersRepository.createUser(authCredentialsDto);
    }

}
