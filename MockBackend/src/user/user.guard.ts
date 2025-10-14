import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { jwtConstants } from "./constants";

@Injectable()
export class UserGuard implements CanActivate {
    constructor(private jwtService : JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest()
        const token = this.extrairToken(req)

        if(!token) {
            throw new UnauthorizedException()
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwtConstants.secret,
            })

            req['user'] = payload

            return true
        } catch {
            throw new UnauthorizedException()
        }
    }

    private extrairToken(req: Request): string | undefined{
        const [type, token] = req.headers['autorizacao']?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}