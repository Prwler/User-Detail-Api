import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstname: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastname: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    dob: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    next_of_kin: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    university: string;
}