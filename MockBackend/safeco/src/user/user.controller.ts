import { Body, Controller, Post } from '@nestjs/common';
import type { SignupDTO, SigninDTO} from './DTOs/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Post('signup')
    async signup(@Body() req: SignupDTO) {
        return await this.userService.signup(req)
    }

    @Post('signin')
    async signin(@Body() req: SigninDTO) {
        return await this.userService.signin(req)
    }
}
