import { GoogleStrategy } from './google.strategy';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { GoogleController } from './google.controller';
import { GoogleService } from './google.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GoogleController],
  providers: [GoogleService, GoogleStrategy],
})
export class GoogleModule {}