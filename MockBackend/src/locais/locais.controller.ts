import { Body, Controller, Get, Patch, Post, Put } from "@nestjs/common";
import { SignupLocal } from "./DTOs/locais";
import { LocaisService } from "./locais.service";

@Controller() 
export class LocaisController {
    constructor(private locaisService: LocaisService) {}

    @Post('room')
    async signup(@Body() req: SignupLocal) {
        return await this.locaisService.signup(req)
    }

    @Put('room/:id')
    async modifyRoom(@Body() req: SignupLocal) {
        return await this.locaisService.modifyRoom(req)
    }

    @Get('rooms')
    async listAll() {
        return await this.locaisService.listAll()
    }

    @Get('room/:id')
    async searchById() {
        return await this.locaisService.searchById()
    }

    @Patch('room/:id')
    async isBlocked() {
        return await this.locaisService.isBlocked()
    }
}