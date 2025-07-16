/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./create-user.dto";
import { User } from "./user.entity";


@Controller('users')
export class UserController {
   constructor(private readonly userService: UserService) { }

   @Post('register')
   async register(@Body() createUserDTO: CreateUserDTO): Promise<User> {
      return this.userService.create(createUserDTO)
   }
}