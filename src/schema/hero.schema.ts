import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type HeroModel = HydratedDocument<Hero>;

@Schema()
export class Hero {
  @Prop()
  id: Number;
  @Prop()
  name: string;
  @Prop()
  backgroundImg: string;
  @Prop()
  styleImg: string;
  @Prop()
  primary_attr:number;
  @Prop()
  complexity: number;
}

export const HeroesSchema = SchemaFactory.createForClass(Hero);
