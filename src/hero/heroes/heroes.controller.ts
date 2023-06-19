import { Controller, Get, Query } from '@nestjs/common';
import {  get } from 'mongoose';
import { HeroesService } from './heroes.service';

@Controller('Heroes')
export class HeroesController {
    constructor(private readonly heroesService: HeroesService) { }

  
  @Get('')
  public async getid(
    @Query() id :number,
    @Query('keyword') keyword: String,
  ) {
    return await this.heroesService.getAll(keyword);
  }

  @Get('ability')
  public async getability(
    @Query('id') id :number,
  ) {
    return await this.heroesService.getAbility(id);
  }
}
