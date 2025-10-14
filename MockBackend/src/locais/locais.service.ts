import { Injectable } from "@nestjs/common";
import { SignupLocal } from "./DTOs/locais";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LocaisService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService) {}
    async signup(req: SignupLocal) {
        const local = await this.prismaService.local.create({ data: req })
        return local
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