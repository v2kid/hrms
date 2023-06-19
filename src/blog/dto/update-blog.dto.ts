import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    title: string
    description: string
    publishDate: string
    featuredImage: string
    published:string
    
}