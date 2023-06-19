import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { UserService } from './user/user.service';
import { User, UserSchema } from './schema/user.schema';
import { AuthModule } from './auth/auth.module';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { BlogModule } from './blog/blog.module';
import { GoogleModule } from './googleauth/google.module';
import { ContactsModule } from './contacts/contacts.module';
import { TalentModule } from './hero/talent.module';
import { HeroesModule } from './hero/heroes/heroes.module';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/nest',
      }),
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    GoogleModule,
    UserModule,
    AuthModule,
    BlogModule,
    ContactsModule,
    TalentModule,
    HeroesModule
  ],
  controllers: [AppController,],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    UserService,
  
  ],

})
export class AppModule {}
