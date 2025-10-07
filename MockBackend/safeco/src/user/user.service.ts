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
}
