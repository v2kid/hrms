import { Document, FilterQuery, Model, Types } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import {  InjectModel } from '@nestjs/mongoose';
import { userModel, User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Injectable()
export class UserService {
  [x: string]: any;
  constructor(@InjectModel('User') private userModel: Model<userModel>) {

  }
  async findOne(email: string): Promise<any> {
   const  user = await this.userModel.find((user: { email: string; }) => user.email === email)
   return user;
  }
  /**
   * 
   * @returns 
   */
  public getHello(): string {
    return 'Hello World!';
  }
  public async getid(id : string){
    const user = await this.userModel.findById({ _id: id })
    return user;
  }
  /**
   * getlist
   */
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth()
  public async getlist(
    page: number = null,
    perPage: number = null,
    sortBy = 'email',
    sortOrder: 'asc' | 'desc' = 'desc',
    keyword : String,
  ) {
    const sort: { [sortOrder: string]: 'asc' | 'desc' } = {
      [sortBy]: sortOrder,
    };
    return {
      countAll: await this.userModel.count().exec(),
      data: await this.userModel
        .find({email: new RegExp (keyword as string) }) // where email like %keyword%
        .skip((page-1)*10)
        .limit(perPage as number)
        .sort(sort)
        .exec(),
      totalPages: Math.ceil(
        ((await this.userModel.count().exec()) / perPage) as number,
      ),
    };
    
    // cách 2 :: if(sortOrder==="desc"){
    // return {
    //     countAll: await this.userModel.count().exec(),
    //     data: await this.userModel.find()
    //         .skip((page-1)*perPage)
    //         .limit(perPage as number)
    //         .sort("email":1)
    //         .exec()
    // };
    // }
    //   if(sortOrder==="asc"){
    //     return {
    //         countAll: await this.userModel.count().exec(),
    //         data: await this.userModel.find()
    //             .skip((page-1)*perPage)
    //             .limit(perPage as number)
    //             .sort({"email":-1})
    //             .exec()
    //     };
    //   }
  }

  /**
   * 
   * @param createUserDto 
   * @param email 
   * @returns 
   */
  public async signup(createUserDto: CreateUserDto, email: string) {
    if (await this.userModel.findOne({ email })) {
      return 'user existed';
    } else {
      const name= createUserDto.name;
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const createdUser = new this.userModel({
        name,
        email,
        password: hashedPassword,
      });
      return await createdUser.save();
    }
  }

  /**
   * 
   * @param createUserDto 
   * @param email 
   * @param password 
   * @returns 
   */
  public async signin(
    email: string,
    password: string,
  ): Promise<any> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user && (await bcrypt.compare(password, user.password))) {
        // const payload = { email: user.email, sub: user._id };
        // return {
        //     access_token: this.jwtService.sign(payload, {
        //         secret: '123'
        //     }),
        // };
        
        return(user)
      }
    
  }

  /**
   * Update 
   *
   * @param id 
   * @param UpdateUserDto 
   * @returns 
   */
  public async update(id: string, UpdateUserDto: UpdateUserDto): Promise<any> {
  
    if  (await this.userModel.findOneAndUpdate({ _id: id }, UpdateUserDto).exec()) {
      return 'user';
    } else {
      return 'sua that bai';
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
