import { Body, Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import type { SignupDTO, SigninDTO} from './DTOs/user';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}
    
    @Post('users')
    async signup(@Body() req: SignupDTO) {
        return await this.userService.signup(req)
    }

    @Post('auth/login')
    async signin(@Body() req: SigninDTO) {
        return await this.userService.signin(req)
    }

    @Get('users')
    async listAll() {
        return await this.userService.listAll()
    }

    @Get('users/:id')
    async searchById() {
        return await this.userService.searchById()
    }

    @Patch('users/:id')
    async updateUser(@Body() req) {
        return await this.userService.updateUser()
    }

    @Delete('users/:id')
    async deleteUser(@Body() req) {
        return this.userService.deleteUser()
    }
}
