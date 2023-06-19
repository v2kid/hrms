import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type blogModel = HydratedDocument<Blog>;
// export interface Post {
//     title: string
//     description: string
//     publishDate: string
//     featuredImage: string
//     published: boolean
//   }
@Schema()
export class Blog {
  
  @Prop()
  title: string
  
  @Prop()
  description: string


  @Prop()
  publishDate: string


  @Prop()
  featuredImage: string

  @Prop()
  published: string
}

export const BlogSchema = SchemaFactory.createForClass(Blog);