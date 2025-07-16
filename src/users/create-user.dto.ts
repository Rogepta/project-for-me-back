/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsString, IsEmail } from 'class-validator'

export class CreateUserDTO {
   @IsString()
   name: string;

   @IsEmail()
   email: string;

   @IsString()
   password: string;
}