import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { talentModel } from "src/schema/talent.schema";




@Injectable()
export class TalentService {
    [x: string]: any;
    constructor(@InjectModel('Talent') private TalentModel: Model<talentModel>) {
    }
   
    public async getid(id: number) {
        const  hero = await this.TalentModel.findOne({ id: id }).exec();
        return hero;
       }
  }