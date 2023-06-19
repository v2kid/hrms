
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { Hero, HeroesSchema } from 'src/schema/hero.schema';
import { Ability, AbilitySchema } from 'src/schema/ability.schema';

@Module({
    imports: [ MongooseModule.forFeature([{ name: Hero.name, schema: HeroesSchema }]),MongooseModule.forFeature([{ name: Ability.name, schema: AbilitySchema }])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}