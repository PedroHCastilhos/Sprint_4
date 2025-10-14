import { Body, Controller, Post, Get, Patch, Delete, ParseArrayPipe, Param } from '@nestjs/common';
import { SignupDTO, SigninDTO} from './DTOs/user';
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
    async searchById(@Param('id') id : number) {
        return await this.userService.searchById(id)
    }

    @Patch('users/:id')
    async updateUser(@Body() req , @Param('id') id : number) {
        return await this.userService.updateUser(req, id)
    }

    @Delete('users/:id')
    async deleteUser(@Body() req, @Param('id') id : number) {
        return this.userService.deleteUser(req, id)
    }
}
