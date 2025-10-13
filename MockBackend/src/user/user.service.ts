import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './DTOs/user';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import {JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService) {}
    async signup(req: SignupDTO) {
        const existeUsuario = await this.prismaService.user.findUnique({
            where: {
                email: req.email
            }
        })

        if(existeUsuario) {
            throw new UnauthorizedException('Usuario ja existe')
        }

        const hashedPassword = await bcrypt.hash(req.password, 10)

        const user = await this.prismaService.user.create({ 
            data: {
                ...req,
                password: hashedPassword
            }
        })

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            level: user.level
        }
    }

    async signin(req: SigninDTO) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: req.email
            }
        })

        if(!user) {
            throw new UnauthorizedException("Credenciais invalidas")
        }

        const senhaValida = await bcrypt.compare(req.password, user.password)

        if(!senhaValida) {
            throw new UnauthorizedException("Credenciais invalidas")
        }

        const token = await this.jwtService.signAsync({
            id: user.id,
            name: user.name,
            email: user.email,
            level: user.level,
            profile_image: user.profile_image
        })
        
        return {
            token,
        }
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
