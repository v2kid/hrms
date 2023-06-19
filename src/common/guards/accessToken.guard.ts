import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthGuard } from '@nestjs/passport';

import { jwtConstants } from 'src/auth/constant';


@Injectable()
export class AccessTokenGuard  implements CanActivate {
    jwtService: JwtService;
    async canActivate(context: ExecutionContext): Promise<boolean | any> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request)
        if (!token) {
            throw new UnauthorizedException();
          }
          try {
            const payload = await this.jwtService.verifyAsync(
              token,
              {
                secret: jwtConstants.secret
              }
            );
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request[''] = payload;
            return true
          } catch {
            throw new UnauthorizedException();
          }
    }
    private extractTokenFromHeader(request: any): any | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }
  }
      
