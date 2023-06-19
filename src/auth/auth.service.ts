import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userModel } from 'src/schema/user.schema';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from './constant';
import { error } from 'console';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<userModel>,
    ) {}
    
  async signIn(email: string, password : string): Promise<any> {
    const user = await this.userModel.findOne({email}).exec();
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email: user.email, sub: user._id };
      const token = jwt.sign(payload,jwtConstants.secret)
      const access_token = JSON.stringify(token);
      return access_token
    }else{
     throw new UnauthorizedException(error)
    }

  }
    /**
   * 
   * @param id 
   * @returns 
   */
    public async deletebyId(id: string): Promise<any> {
      return await this.userModel.findByIdAndDelete({ _id: id })
   }
}