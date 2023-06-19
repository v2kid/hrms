import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type contactModel = HydratedDocument<Contacts>;

@Schema()
export class Contacts {
  
  @Prop()
  email: string
  @Prop()
  title: string
  @Prop()
  message: string
  @Prop()
  phonenumber: string
  @Prop()
  status: 'pending' | 'done'
  @Prop()
  createdDate: string
}

export const ContactsSchema = SchemaFactory.createForClass(Contacts);