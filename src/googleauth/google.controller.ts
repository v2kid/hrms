
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './google-auth.guard';
import { GoogleService } from './google.service';

@Controller('auth')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.googleService.googleLogin(req);
  }
}