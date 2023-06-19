import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { abilityModel } from "src/schema/ability.schema";
import { HeroModel } from "src/schema/hero.schema";




@Injectable()
export class HeroesService {
    [x: string]: any;
    constructor(@InjectModel('Hero') private HeroModel: Model<HeroModel>,
    @InjectModel('Ability') private AbilityModel: Model<abilityModel>
    ) {
    }
    
   
    public async getAll(
        keyword : String,
    ) {
        const  hero = await this.HeroModel.find()
        .find({ name: { $regex: new RegExp(keyword as string, 'i') } } )
        .exec()
        return hero;
       }
       public async getAbility(id : number) {
        const  ability = await this.AbilityModel.findOne({ id: id }).exec();
        return ability;
       }
  }