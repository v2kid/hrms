import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userModel = HydratedDocument<User>;

@Schema()
export class User {
  
  @Prop()
  name : String;
  
  @Prop()
  email: String;


  @Prop()
  password: String;


  @Prop()
  createdAt: String;
}

export const UserSchema = SchemaFactory.createForClass(User);