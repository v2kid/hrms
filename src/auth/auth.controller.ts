import { Body, Controller, Post, HttpCode, HttpStatus, Delete, UseGuards, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }


  // @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return (await this.authService.deletebyId(id));
  }
}