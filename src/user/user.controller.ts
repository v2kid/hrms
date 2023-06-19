import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  /**
 * 
 */
@Get('')
public async getid(
  @Query('id') id :string,
) {
  return await this.userService.getid(id);
}


  /**
   * 
   * @param email 
   * @param password 
   * @param createUserDto 
   * @param res 
   */
  // @Post('signin')
  // public async signIn(
  //   @Body('email') email: string,
  //   @Body('password') password: string,
  //   @Res() res: Response
  // ) { if( await this.userService.signin( email, password)){
  //     res.status(200).send( {email});
  // }
  // return res.status(400).send({
  //   error: 'sai tk mk'
  // })
  //   // res.cookie('jwt', token.access_token, { httpOnly: true });
  //   // localStorage.setItem('jwt', token.access_token);
  
  // }
  

  /**
   * 
   * @param email 
   * @param createUserDto 
   * @returns 
   */
  @Post('signup')
  async signUp(
    @Body('email') email: string,
    @Body() createUserDto: CreateUserDto,
  ) {
    const user = await this.userService.signup(createUserDto, email);
    return user;
  }
  /**
   * 
   * @param id 
   * @param updateUserDto 
   * @returns 
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  /**
 * 
 * @param req 
 * @param res 
 */
  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logout(@Req() req, @Res() res) {
     res.clearCookie('jwt');
    res.status(200).send({ message: 'Successfully logged out' });
  await  req.logout(function(err) {
    if (err) { return (err)
    } 
  })
   
  }


/**
 * 
 * @param page 
 * @param perPage 
 * @param sortBy 
 * @param sortOrder 
 * @param keyword 
 * @returns 
 */
  @Get('list')
  // @UseGuards(AuthGuard)
  public async getlist(
    @Query('page') page = 1,
    @Query('per_page') perPage: number,
    @Query('sortBy') sortBy: keyof User,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    @Query('keyword') keyword: String,
  ) 
  
  {

    return await this.userService.getlist(
      page as number,
      perPage as number,
      sortBy,
      sortOrder,
      keyword
    );
  }


  /**
   * 
   * @param id 
   * @returns 
   */
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return (await this.userService.deletebyId(id));
  }
}
