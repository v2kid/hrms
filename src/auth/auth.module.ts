import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { UserService } from 'src/user/user.service';
import { User, UserSchema } from 'src/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    PassportModule,
   JwtModule.register({
    secret : jwtConstants.secret
   }),
  ],
  providers: [AuthService, UserService ],
  controllers: [AuthController],
  exports: [AuthService,JwtModule],
})
export class AuthModule {}