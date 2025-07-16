/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
   constructor(
      private userService: UserService,
      private jwtService: JwtService
   ) { }

   async validateUser(email: string, password: string) {
      const user = await this.userService.findByEmail(email);
      if (user && await bcrypt.compare(password, user.password)) {
         const { password, ...result } = user;
         return result;
      }
      throw new UnauthorizedException('Invalid credentials');
   }

   async login(user: any) {
      const payload = { email: user.email, sub: user.id }
      return {
         access_token: this.jwtService.sign(payload)
      }
   }
}