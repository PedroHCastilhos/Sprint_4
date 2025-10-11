import { Injectable } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './DTOs/user';

@Injectable()
export class UserService {
    async signup(req: SignupDTO) {
        return req
    }

    async signin(req: SigninDTO) {
        return req
    }

    async listAll() {
        return 'listando'
    }

    async searchById() {
        return 'listando'
    }

    async updateUser() {
        return 'usuario atualizado'
    }

    async deleteUser() {
        return 'Usuario deletado'
    }
}
