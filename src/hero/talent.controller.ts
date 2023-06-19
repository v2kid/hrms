import { Controller, Get, Query } from '@nestjs/common';
import {  get } from 'mongoose';
import { TalentService } from './talent.service';

@Controller('talent')
export class TalentController {
    constructor(private readonly talentService: TalentService) { }

  
  @Get('')
  public async getid(
    @Query('id') id :number,
  ) {
    return await this.talentService.getid(id);
  }
   
}
