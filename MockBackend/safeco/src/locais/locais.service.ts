import { Injectable } from "@nestjs/common";
import { SignupLocal } from "./DTOs/locais";

@Injectable()
export class LocaisService {
    async signup(req: SignupLocal) {
        return req
    }

    async modifyRoom(req: SignupLocal) {
        return req
    }

    async listAll() {
        return 'listando'
    }

    async searchById() {
        return 'listando'
    }

    async isBlocked() {
        return 'bloqueado'
    }
}