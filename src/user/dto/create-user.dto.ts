import {
    // validate,
    // validateOrReject,
    // Contains,
    // IsInt,
    // Length,
    IsEmail,
    // IsFQDN,
    // IsDate,
    // Min,
    // Max,
    IsNotEmpty,
    IsString,
    Min,
    min
} from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    name:String;
    @IsEmail()
    @IsNotEmpty()
    email: String;
    @IsString()
    @IsNotEmpty()
    @Min(3)
    password: String;
}
