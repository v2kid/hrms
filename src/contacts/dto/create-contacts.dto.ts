import { Prop } from '@nestjs/mongoose';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Min,
    min
} from 'class-validator';
export class CreateContactsDto {
    @IsNotEmpty()
    email: string
    @IsNotEmpty()
    title: string
    @IsNotEmpty()
    message: string
    @IsNotEmpty()
    phonenumber: string
    @IsNotEmpty()
    status: 'pending'
    createdDate: string
}
