import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Min,
    min
} from 'class-validator';
export class CreateBlogDto {
    @IsNotEmpty()
    title: string
    @IsNotEmpty()
    description: string
    @IsNotEmpty()
    publishDate: string
    @IsNotEmpty()
    featuredImage: string
    @IsNotEmpty()
    published: string
}
