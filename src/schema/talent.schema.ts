import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type talentModel = HydratedDocument<Talent>;
  
  @Schema()
  export class Talent {
    
  @Prop()
  id : Number;
  @Prop()
  Tenleft : String;
  @Prop()
  Tenright : String;
  @Prop()
  Fifteenleft : String;
  @Prop()
  Fifteenright : String;
  @Prop()
  Twentyleft : String;
  @Prop()
  Twentyright : String;
  @Prop()
  Twentyfiveleft : String;
  @Prop()
  Twentyfiveright : String;
  }
  
  export const TalentSchema = SchemaFactory.createForClass(Talent);